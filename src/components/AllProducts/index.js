import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../store/actions/index';

import Item from '../../containers/Item';
import Spinner from '../../common/Spinner';
import { CardsWrapper } from './styled.js';

const AllProducts = props => {
  const handleRemoveItem = item => {
    this.props.removeItem(item);
  };

  const { items } = props;

  return (
    <CardsWrapper>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <Item
            key={index}
            category={item.category}
            name={item.name}
            year={item.year}
            number={item.number}
            description={item.description}
            url={item.img}
            removeItem={() => handleRemoveItem(item)}
          />
        ))
      ) : (
        <Spinner />
      )}
    </CardsWrapper>
  );
};

const mapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllProducts);
