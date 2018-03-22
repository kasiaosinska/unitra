import React, { Component } from 'react';
import './style.css';
import { observer, inject } from 'mobx-react';
import { doSignInWithEmailAndPassword } from '../../firebase/auth'

const initiaState = {
  email: '',
  password: '',
}

const Login = observer(class Login extends Component {

   state = { ...initiaState };


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        doSignInWithEmailAndPassword(email, password);
        this.props.history.push('/additem');
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
});

export default inject('store')(Login);