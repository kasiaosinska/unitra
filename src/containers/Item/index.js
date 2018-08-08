import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../store/actions'

const handleRemoveItem = item => {
  this.props.removeItem(item)
}

const Item = ({ category, name, descripton, url}) => {
    return (
        <div>
          {url && <img src={url} alt="radio" />}
            <p>{category}</p>
            <p>{name}</p>
            <p>{descripton}</p>
            <button onClick={handleRemoveItem}>usuń</button>
        </div>
    )
}

export default connect(null, { removeItem })(Item)


