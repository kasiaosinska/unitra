import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItems, removeItem } from '../../store/actions/index';

import Item from '../../containers/Item';
import Spinner from '../../common/Spinner';
import { CardsWrapper } from './styled.js';

const AllProducts = props => {
  useEffect(() => {
    props.fetchItems();
  });

  const handleRemoveItem = item => {
    this.props.removeItem(item);
  };

  const { data } = props;

  return (
    <CardsWrapper>
      {data && data.length > 0 && Object.keys(data.items).length > 0 ? (
        Object.keys(data.items).map((item, index) => (
          <Item
            key={index}
            category={data.items[item].category}
            name={data.items[item].name}
            year={data.items[item].year}
            number={data.items[item].number}
            description={data.items[item].description}
            url={data.items[item].img}
            removeItem={() => handleRemoveItem(item)}
          />
        ))
      ) : (
        <Spinner />
      )}
    </CardsWrapper>
  );
};

const mapStateToProps = ({ items }) => ({ data: items });

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllProducts);
