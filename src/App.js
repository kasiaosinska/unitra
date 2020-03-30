import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import AddItem from './components/AddItem';
import AllProducts from './components/AllProducts';
import Login from './components/Login';
import Main from './components/Main';
import Menu from './containers/Menu';
import { connect } from 'react-redux';

const App = props => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={() =>
        props.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.history },
            }}
          />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Route exact path="/" component={Main} />
        <Route path="/allproducts" component={AllProducts} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/additem" component={AddItem} />
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

export default connect(mapStateToProps)(App);
