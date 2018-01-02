import React, { Component } from 'react';
import './style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: false,
            login: '',
            password: '',
        }
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            login: this.state.login,
            password: this.state.password,
        })
    }

    render() {
        return (
            <div>
                <form className="login" onSubmit={this.onSubmit}>
                    <label>
                        Login:
                        <input value={this.state.login} onChange={this.onChange} placeholder="Login" />
                    </label>
                    <label>
                        Password:
                        <input value={this.state.password} onChange={this.onChange} placeholder="Hasło" />
                    </label>
                    <button>Zaloguj</button>
                </form>
            </div>
        )
    }
}

export default Login;