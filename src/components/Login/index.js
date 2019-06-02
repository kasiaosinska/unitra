import React, { useState, useEffect } from 'react';
import { Container, Box, Title, Form, Input, Button } from '../../styled';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import firebase from 'firebase';

const Login = (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        props.history.push('/additem');
      }
    });
  });

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  };

  const handleChangePassword = e => {
    setPassword(e.target.value)
  };


  const handleSubmit = e => {
    e.preventDefault();
    doSignInWithEmailAndPassword(email, password);
  };

  const isInvalid = email === '' || password === '';
  return (
    <Container>
      <Box size="300px">
        <Title>Logowanie</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="text"
            value={email}
            onChange={handleChangeEmail}
            placeholder="e-mail"
          />
          <Input
            name="password"
            type="text"
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

export default Login;
