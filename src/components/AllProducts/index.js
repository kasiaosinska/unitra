import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../../store/actions/index'

import Item from '../../containers/Item'

export class AllProducts extends Component {
  componentWillMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div>
        {console.log('Mapowanie po obiekcie będzie tutaj', this.props.items)}
        {/* {this.props.items &&
          this.props.items.map((item, index) => (
            <Item
              key={index}
              category={item.category}
              name={item.name}
              descripton={item.description}
              url={item.url}
            />
          ))} */}
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({ items })

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProducts)
