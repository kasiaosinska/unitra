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
            <div>
                <ul className="nav">
                    <li>
                        <NavLink exact activeClassName='active' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/allproducts">Wszystkie produkty</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/additems">Dodaj produkt</NavLink>
                    </li>
                    <li>
                        {this.props.store.isLogged ?
                            <NavLink activeClassName='active' to="/">
                                <button onClick={this.handleLoggedOut}>
                                    Wyloguj
                                </button>
                            </NavLink> :
                            <NavLink activeClassName='active' to="/login">
                                <button>
                                    Zaloguj
                                </button>
                            </NavLink>
                        }
                    </li>
                </ul>
            </div>
        )
    }
});

export default withRouter(inject('store')(Menu));

