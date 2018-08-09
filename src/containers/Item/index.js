import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../store/actions'

const handleRemoveItem = item => {
  this.props.removeItem(item)
}

const Item = ({ category, name, year, number, description, url}) => {
    return (
        <div>
          {url && <img src={url} alt="radio" />}
            <p>{category}</p>
            <p>{name}</p>
            <p>{year}</p>
            <p>{number}</p>
            <p>{description}</p>
            <button onClick={handleRemoveItem}>usuń</button>
        </div>
    )
}

export default connect(null, { removeItem })(Item)