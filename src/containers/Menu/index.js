import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Menu = () => {
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
            </ul>
        </div>
    )
};

export default Menu;

