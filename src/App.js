import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AddItem from './components/AddItem';
import AllProducts from './components/AllProducts';
import Login from './components/Login';
import Main from './components/Main';
import Menu from './containers/Menu';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        this.props.isLoggedIn
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

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(App);
