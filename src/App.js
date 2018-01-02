import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import AddItem from './components/AddItem';
import AllProducts from './components/AllProducts';
import Login from './components/Login';
import Main from './components/Main';
import Menu from './containers/Menu';

const authorization = {
    isAuthorized: false,
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        authorization.isAuthorized === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu />
                    <Route exact path='/' component={Main} />
                    <Route path='/allproducts' component={AllProducts} />
                    <Route path='/login' component={Login} />
                    <PrivateRoute path='/additems' component={AddItem} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
