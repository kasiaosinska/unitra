import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../store/actions/index';

import Item from '../../containers/Item';

export class AllProducts extends Component {

  componentWillMount() {
    this.props.fetchItems()
  }

  render() {
    const { data } = this.props

    return (
      <div>
        {data && Object.keys(data.items).length > 0 && Object.values(data.items).map((item, index) =>
          <Item
            key={index}
            category={item.category}
            name={item.name}
            year={item.year}
            number={item.number}
            description={item.description}
            url={item.img}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({ data: items })

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
