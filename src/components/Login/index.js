import React, { Component } from 'react';
import './style.css';
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
      <div className="login-wrapper">
        <div className="login-box">
          <h3>Logowanie</h3>
          <form className="login" onSubmit={this.handleSubmit}>
            <input name="email" type="text" value={email} onChange={this.handleChange} placeholder="e-mail" />
            <input name="password" type="text" value={password} onChange={this.handleChange} placeholder="hasło" />
            <button type="submit" disabled={isInvalid} className="btn btn-danger">Zaloguj</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(Login);