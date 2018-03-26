import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';
import { observer, inject } from 'mobx-react';
import { auth } from '../../firebase';
import firebase from 'firebase';

const Menu = observer(class Menu extends Component {

    state = {
        authUser: false,
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (!firebaseUser) {
                this.setState({authUser: false});
                this.props.history.push('/');
            }
            else {
                this.setState({authUser: true});
            }
        })
    }

    handleLoggedOut = (e) => {
        e.preventDefault();
        auth.doSignOut();
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
                        {this.state.authUser ?
                            <NavLink className="menu-element" to="/">
                                <button className="btn btn-danger" onClick={this.handleLoggedOut}>
                                    Wyloguj
                                </button>
                            </NavLink> :
                            <NavLink className="menu-element" to="/login">
                                <button className="btn btn-danger">
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

