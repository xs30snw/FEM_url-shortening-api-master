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
            .then(response => response.json())
            .then(data => {
                // Http input validation heuristic
                const output = data?.result?.full_short_link;
                if (!output) {
                    throw 'Problems with shortening';
                };

                // Limit shortened items to 3
                if (items.length >= 3) {
                    items.pop();
                };

                this.setState({
                    items: items.concat([{
                        input: shortenInput.value,
                        output: data?.result?.full_short_link,
                    }]),
                })
                const labelError = document.getElementById('labelError');
                labelError.classList.add('hide');
            })
            .catch(() => {
                const labelError = document.getElementById('labelError');
                labelError.classList.remove('hide');
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