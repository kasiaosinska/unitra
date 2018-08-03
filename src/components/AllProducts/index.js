import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';

import Item from '../../containers/Item';

export class AllProducts extends Component {
  render() {
    return (
      <div>
        {this.props.items && this.props.items.map((item, index) =>
          <Item
            key={index}
            category={item.category}
            name={item.name}
            descripton={item.description}
            url={item.url}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items
})

export default connect(mapStateToProps, null)(AllProducts);
