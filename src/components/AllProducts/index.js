import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../store/actions/index';
import Item from '../../containers/Item';
import { CardsWrapper, Text } from './styled.js';

const AllProducts = props => {
  const handleRemoveItem = item => {
    this.props.removeItem(item);
  };

  const { items, loggedIn } = props;

  return (
    <React.Fragment>
      {items && items.length > 0 ? (
        <CardsWrapper>
          {items.map(item => (
            <Item
              key={item.id}
              category={item.category || ''}
              name={item.name}
              year={item.year}
              number={item.number}
              description={item.description}
              url={item.img}
              showRemoveButton={loggedIn}
              removeItem={() => handleRemoveItem(item)}
            />
          ))}
        </CardsWrapper>
      ) : (
        <Text>Nie ma żadnych sprzętów</Text>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = ({ items, loggedIn }) => ({ items, loggedIn });

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllProducts);
