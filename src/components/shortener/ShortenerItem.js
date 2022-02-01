import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ShortenerItem(props) {
    const [text, setText] = useState('');

    function copyLink (e) {
        const shortenerItemButtons = document.getElementsByClassName('shortenerItemButton');
        for (let button of shortenerItemButtons) {
            button.classList.remove('copied');
            button.innerHTML = 'Copy';
        };
        const shortenerItemOutput = e.target.parentNode.querySelector('p:last-of-type');
        setText(shortenerItemOutput.innerHTML);
        e.target.classList.add('copied');
        e.target.innerHTML = 'Copied!';
    } 

    return (
        <div className="shortenerItem">
            <p>{props.linkInput}</p>
            <hr />
            <p className="shortenerItemOutput">{props.linkOutput}</p>
            <CopyToClipboard text={text}>
                <button
                    className='shortenerItemButton'
                    onClick={(e) => copyLink(e)}
                >Copy</button>
            </CopyToClipboard>
        </div>
    )
}

export default ShortenerItem
