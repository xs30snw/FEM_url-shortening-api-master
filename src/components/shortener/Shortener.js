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
        const shortenerInput = document.getElementById('shortener__input');
        const labelError = document.getElementById('shortener__lbl-error');
        
        fetch('https://api.shrtco.de/v2/shorten?url=' + shortenerInput.value)
            .then(response => {
                // Handle response status beyond 200-299
                if (!response.ok) {
                    throw new Error('The fetch response is not ok');
                };
                return response.json();
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
                        input: shortenerInput.value,
                        output: output,
                    }]),
                })

                // Hide error label, is successful
                shortenerInput.classList.remove('input--error');
                labelError.classList.add('hide');
            })
            .catch(error => {
                // Show error label, is erroneus
                shortenerInput.classList.add('input--error');
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
            <section className="shortener" aria-label='Input and shortened links'>
                <div className="container">
                    <form
                        className="shortener__form"
                        aria-label='URL shortener'
                        onSubmit={(e) => this.handleClick(e)}>

                        <input
                            type="text"
                            id="shortener__input"
                            name="shortener__input"
                            aria-label='Field for a link to shorten'
                            placeholder="Shorten a link here..." />

                        <label
                            id="shortener__lbl-error" 
                            className="hide">Please add a link</label>

                        <button type="submit" className="shortener__submit btn-primary">Shorten It!</button>

                    </form>
                    {shortenerItems}
                </div>
            </section>
        )
    }
}

export default Shortener;