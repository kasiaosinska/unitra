import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../store/actions/index'

import Item from '../../containers/Item';

export class AllProducts extends Component {

  componentWillMount() {
    console.log('aaa', this.props.fetchItems())
    this.props.fetchItems()
  }

  render() {
    console.log('data', this.props.data)
    return (
      <div>
        {this.props.data && this.props.data.map((item, index) =>
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

const mapStateToProps = ({ data }) => data

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
