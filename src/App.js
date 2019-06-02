import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';

import AddItem from './components/AddItem';
import AllProducts from './components/AllProducts';
import Login from './components/Login';
import Main from './components/Main';
import Menu from './containers/Menu';

const App = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        setAuthUser(true);
      } else {
        setAuthUser(false);
      }
    });
  });

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
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

export default App;
