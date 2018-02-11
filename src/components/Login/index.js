import React, { Component } from 'react';
import './style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    onChange = e => {
        e.preventDefault();
        this.setState({
            username: this.state.username,
            password: this.state.password,
        })
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onLogin(
            this.state.username,
            this.state.password
        )
    };

    render() {
        return (
            <div>
              <h3>Logowanie</h3>
                <form className="login" onSubmit={this.onSubmit}>
                    <label>
                        Nazwa użytkownika:
                        <input value={this.state.username} onChange={this.onChange} placeholder="Nazwa użytkownika" />
                    </label>
                    <label>
                        Hasło:
                        <input value={this.state.password} onChange={this.onChange} placeholder="Hasło" />
                    </label>
                    <button>Zaloguj</button>
                </form>
            </div>
        )
    }
}

export default Login;
