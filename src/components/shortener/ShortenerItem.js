import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ShortenerItem(props) {
    const [text, setText] = useState('');

    function copyLink (e) {
        // Remove copied styles from all the buttons
        const shortenerItemButtons = document.getElementsByClassName('shortener__item__btn-copy');
        for (let button of shortenerItemButtons) {
            button.classList.remove('copied');
            button.innerHTML = 'Copy';
        };
        // Add copied styles to the current button
        const shortenerItemOutput = e.target.parentNode.querySelector('p:last-of-type');
        setText(shortenerItemOutput.innerHTML);
        e.target.classList.add('copied');
        e.target.innerHTML = 'Copied!';
    } 

    return (
        <div className='shortener__item'>
            <p>{props.linkInput}</p>
            <hr />
            <p className='shortener__item__output'>{props.linkOutput}</p>
            
            <CopyToClipboard text={text}>
                <button
                    className='btn-primary shortener__item__btn-copy'
                    onClick={(e) => copyLink(e)}
                >Copy</button>
            </CopyToClipboard>
        </div>
    )
}

export default ShortenerItem;