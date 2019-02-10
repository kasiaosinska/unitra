import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from '../../styled';
import {
  Container,
  MenuList,
  ElementOnTheRight,
  ElementOnTheLeft,
} from './styled';
import { connect } from 'react-redux';
import { auth } from '../../firebase';
import firebase from 'firebase';

class Menu extends Component {
  state = {
    authUser: false,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (!firebaseUser) {
        this.setState({ authUser: false });
        this.props.history.push('/');
      } else {
        this.setState({ authUser: true });
      }
    });
  }

  handleLoggedOut = e => {
    e.preventDefault();
    auth.doSignOut();
  };

  render() {
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
            {this.state.authUser ? (
              <NavLink to="/">
                <Button onClick={this.handleLoggedOut}>Wyloguj</Button>
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
  }
}

export default withRouter(connect()(Menu));
