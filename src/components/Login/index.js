import React, { Component } from 'react';
import './style.css';
import { observer, inject } from 'mobx-react';
import firebase from 'firebase';

const Login = observer(class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const pass = this.state.password;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                this.props.store.loginStore.isLogged = true;
                this.props.history.push('/additem');
            }
            else {
                this.props.store.loginStore.isLogged = false;
            }
        })

    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="login-wrapper">
                <div className="login-box">
                    <h3>Logowanie</h3>
                    <form className="login" onSubmit={this.handleSubmit}>
                        <input name="email" type="text" value={email} onChange={this.handleChange} placeholder="e-mail" />
                        <input name="password" type="text" value={password} onChange={this.handleChange} placeholder="hasło" />
                        <button type="submit" className="btn btn-danger">Zaloguj</button>
                    </form>
                </div>
            </div>
        )
    }
});

export default inject('store')(Login);