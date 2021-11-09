import React from 'react'

function ShortenerItem(props) {
    return (
        <div className="shortenerItem">
            <p>{props.linkInput}</p>
            <hr />
            <p>{props.linkOutput}</p>
            <button>Copy</button>
        </div>
    )
}

export default ShortenerItem
