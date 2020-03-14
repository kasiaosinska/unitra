import React, { useState } from 'react';
import {
  Container,
  Box,
  ErrorMessage,
  Title,
  Form,
  Input,
  Button,
} from '../../styled';
import { connect } from 'react-redux';
import { isUserLogged } from '../../store/actions';
import { post } from '../../api';
import { setUserSession } from '../../utils/common';

const Login = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChangeLogin = e => {
    setLogin(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    post('/users/authenticate', JSON.stringify({ username: login, password }))
      .then(response => {
        props.isUserLogged(true);
        setUserSession(response.token, response.username);
        props.history.push('/additem');
      })
      .catch(err => {
        console.error(err);
        props.isUserLogged(false);
        setShowErrorMessage(true);
      });
  };

  const isInvalid = login === '' || password === '';
  return (
    <Container>
      <Box size="300px">
        <Title>Logowanie</Title>
        {showErrorMessage && (
          <ErrorMessage>Padano błędny login lub hasło</ErrorMessage>
        )}
        <Form onSubmit={handleSubmit}>
          <Input
            name="login"
            type="text"
            value={login}
            onChange={handleChangeLogin}
            placeholder="login"
          />
          <Input
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="hasło"
          />
          <Button type="submit" disabled={isInvalid}>
            Zaloguj
          </Button>
        </Form>
      </Box>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return { isUserLogged: payload => dispatch(isUserLogged(payload)) };
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
