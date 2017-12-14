import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import AddItem from './components/AddItem';
import Main from './components/Main';
import AllProducts from './components/AllProducts';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/'	component={Main} />
                    <Route path='/allproducts' component={AllProducts} />
                    <Route path='/additems' component={AddItem} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
