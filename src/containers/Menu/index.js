import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from '../../styled';
import {
  Container,
  MenuList,
  ElementOnTheRight,
  ElementOnTheLeft,
} from './styled';
import { connect } from 'react-redux';
import { removeUserSession } from '../../utils/common';
import { isUserLogged } from '../../store/actions';

const Menu = props => {
  const handleLoggedOut = e => {
    e.preventDefault();
    removeUserSession();
    props.isUserLogged(false);
  };

  return (
    <Container>
      <MenuList>
        <ElementOnTheLeft>UNITRA</ElementOnTheLeft>
        <ElementOnTheRight>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </ElementOnTheRight>
        <ElementOnTheRight>
          <NavLink activeClassName="active" to="/allproducts">
            Wszystkie produkty
          </NavLink>
        </ElementOnTheRight>
        <ElementOnTheRight>
          <NavLink activeClassName="active" to="/additem">
            Dodaj Produkt
          </NavLink>
        </ElementOnTheRight>
        <ElementOnTheRight>
          {props.loggedIn ? (
            <NavLink to="/">
              <Button onClick={handleLoggedOut}>Wyloguj</Button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <Button>Zaloguj</Button>
            </NavLink>
          )}
        </ElementOnTheRight>
      </MenuList>
    </Container>
  );
};

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

const mapDispatchToProps = dispatch => ({
  isUserLogged: payload => dispatch(isUserLogged(payload)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Menu),
);
