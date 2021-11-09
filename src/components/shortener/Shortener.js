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
                this.setState({
                    items: items.concat([{
                        input: shortenInput.value,
                        output: data?.result?.full_short_link,
                    }]),
                })
            });
    }

    render() {
        const items = this.state.items;
        console.log(items);

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
                        <label htmlFor="shortenInput" className="shortenerLabel">Please add a link</label>
                        <button type="submit" className="shortenerSubmit">Shorten It!</button>
                    </form>
                    {shortenerItems}
                </div>
            </section>
        )
    }
}

export default Shortener