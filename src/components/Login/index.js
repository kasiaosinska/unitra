import React, { Component } from 'react';
import { Container, Box, Title, Form, Input, Button } from '../../styled'
import { connect } from 'react-redux';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import firebase from 'firebase';

class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.props.history.push('/additem');
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    doSignInWithEmailAndPassword(email, password);
  };

  render() {
    const { email, password } = this.state;
    const isInvalid = email === '' || password === '';
    return (
      <Container>
        <Box size='300px'>
          <Title>Logowanie</Title>
          <Form onSubmit={this.handleSubmit}>
            <Input name="email" type="text" value={email} onChange={this.handleChange} placeholder="e-mail" />
            <Input name="password" type="text" value={password} onChange={this.handleChange} placeholder="hasło" />
            <Button type="submit" disabled={isInvalid}>Zaloguj</Button>
          </Form>
        </Box>
      </Container>
    )
  }
}

export default connect()(Login);