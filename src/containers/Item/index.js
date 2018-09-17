import React from 'react';

const Item = ({ category, name, year, number, description, url, removeItem}) => {
    return (
        <div>
          {url && <img src={url} alt="radio" />}
            <p>{category}</p>
            <p>{name}</p>
            <p>{year}</p>
            <p>{number}</p>
            <p>{description}</p>
            <button onClick={removeItem}>usuń</button>
        </div>
    )
}

export default Item