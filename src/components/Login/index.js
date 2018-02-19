import React, { Component } from 'react';
import './style.css';
import { observer, inject } from 'mobx-react';

const Login = observer(class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
        if ( String(this.state.username) === this.props.store.username && String(this.state.password) === this.props.store.password) {
            this.props.store.isLogged = true;
            this.props.history.push('/additem');
        }
        else {
            this.props.store.isLogged = false;
        }

    };

    render() {
        const { username, password } = this.state;
        return (
            <div className="login-wrapper">
                <div className="login-box">
                    <h3>Logowanie</h3>
                    <form className="login" onSubmit={this.handleSubmit}>
                        <input name="username" type="text" value={username} onChange={this.handleChange} placeholder="nazwa użytkownika" />
                        <input name="password" type="text" value={password} onChange={this.handleChange} placeholder="hasło" />
                        <button className="btn">Zaloguj</button>
                    </form>
                </div>
            </div>
        )
    }
});

export default inject('store')(Login);