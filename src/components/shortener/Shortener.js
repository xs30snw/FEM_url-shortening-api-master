import React from 'react';
import './Shortener.css';
import ShortenerItem from './ShortenerItem';

export class Shortener extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    handleClick(e) {
        e.preventDefault();

        const items = this.state.items.slice(); 
        const shortenInput = document.getElementById('shortenInput');
        
        fetch('https://api.shrtco.de/v2/shorten?url=' + shortenInput.value)
            .then(response => {
                // Handle response status beyond 200-299
                if (!response.ok) {
                    throw new Error('The fetch response is not ok');
                };
                response.json();
            })
            .then(data => {
                // Http input validation heuristic
                const output = data?.result?.full_short_link;
                if (!output) {
                    throw new Error('Problems with shortening');
                };

                // Limit the number of Shortener items to 3
                if (items.length >= 3) {
                    items.pop();
                };

                // Add next shortened link to Shortener item list
                this.setState({
                    items: items.concat([{
                        input: shortenInput.value,
                        output: data?.result?.full_short_link,
                    }]),
                })

                // Hide error label, is successful
                const labelError = document.getElementById('labelError');
                labelError.classList.add('hide');
            })
            .catch(error => {
                // Show error label, is erroneus
                const labelError = document.getElementById('labelError');
                labelError.classList.remove('hide');
                console.log(error);
            });
    }

    render() {
        const items = this.state.items;

        const shortenerItems = items.map((item, id) => {
            return (
                <ShortenerItem
                    key={id}
                    linkInput={item.input} 
                    linkOutput={item.output} 
                />
            )
        });

        return (
            <section className="shortener">
                <div className="container">
                    <form className="shortenerForm"
                          onSubmit={(e) => this.handleClick(e)}
                    >
                        <input type="text" id="shortenInput" name="shortenInput" className="shortenerInput" placeholder="Shorten a link here..." />
                        <label
                            id="labelError"
                            htmlFor="shortenInput" 
                            className="shortenerLabel hide"
                        >Please add a link</label>
                        <button type="submit" className="shortenerSubmit">Shorten It!</button>
                    </form>
                    {shortenerItems}
                </div>
            </section>
        )
    }
}

export default Shortener