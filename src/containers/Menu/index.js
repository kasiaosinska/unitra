import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';
import { observer, inject } from 'mobx-react';

const Menu = observer(class Menu extends Component {

    handleLoggedOut = (e) => {
        e.preventDefault();
        this.props.store.isLogged = false;
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="menu-wrapper">
                <ul className="nav">
                    <li className="menu-element justify-left">UNITRA</li>
                    <li className="justify-right">
                        <NavLink className="menu-element" exact activeClassName='active' to="/">Home</NavLink>
                    </li>
                    <li className="justify-right">
                        <NavLink className="menu-element" activeClassName='active' to="/allproducts">Wszystkie produkty</NavLink>
                    </li>
                    <li className="justify-right">
                        <NavLink className="menu-element" activeClassName='active' to="/additem">Dodaj Produkt</NavLink>
                    </li>
                    <li className="justify-right">
                        {this.props.store.isLogged ?
                            <NavLink className="menu-element" activeClassName='active' to="/">
                                <span onClick={this.handleLoggedOut}>
                                    Wyloguj
                                </span>
                            </NavLink> :
                            <NavLink className="menu-element" activeClassName='active' to="/login">
                                <span>
                                    Zaloguj
                                </span>
                            </NavLink>
                        }
                    </li>
                </ul>
            </div>
        )
    }
});

export default withRouter(inject('store')(Menu));

