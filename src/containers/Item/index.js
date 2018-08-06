import React from 'react';

export default ({ category, name, descripton, url}) => {
    return (
        <div>
          {url && <img src={url} alt="radio" />}
            <p>{category}</p>
            <p>{name}</p>
            <p>{descripton}</p>
        </div>
    )
}
