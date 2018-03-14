import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import AddItem from './components/AddItem';
import AllProducts from './components/AllProducts';
import Login from './components/Login';
import Main from './components/Main';
import Menu from './containers/Menu';

const App = observer(class App extends Component {
    render() {
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.store.loginStore.isLogged
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
            )} />
        );

        return (
            <BrowserRouter>
                <div>
                    <Menu />
                    <Route exact path='/' component={Main} />
                    <Route path='/allproducts' component={AllProducts} />
                    <Route path='/login' component={Login} />
                    <PrivateRoute path='/additem' component={AddItem} />
                </div>
            </BrowserRouter>
        );
    }
});

export default inject('store')(App);
