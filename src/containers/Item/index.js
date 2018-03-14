import React from 'react';
import './style.css';

export default ({ category, name, descripton, url}) => {
    return (
        <div>
            <img src={url} alt="radio" />
            <p>{category}</p>
            <p>{name}</p>
            <p>{descripton}</p>
        </div>
    )
}
