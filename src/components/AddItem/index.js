import React, { Component } from 'react';
import './style.css';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            name: '',
            img: '',
            description: '',
            condition: ''
        }
    }

    onChange = e => {
        this.setState({category: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            category: this.state.category,
            name: this.state.name,
            description: this.state.description,
            condition: this.state.condition
        })
    }

    render() {

        return (
            <form className="entryForm" onSubmit={this.onSubmit}>
                <label>
                    Kategoria:
                    <input value={this.state.category} onChange={this.onChange} placeholder="Kategoria" />
                </label>
                <label>
                    Nazwa:
                    <input value={this.state.name} onChange={this.onChange} placeholder="Nazwa" />
                </label>
                <label>
                    Opis:
                    <input value={this.state.description} onChange={this.onChange} placeholder="Opis" />
                </label>
                <label>
                    Stan:
                    <input value={this.state.condition} onChange={this.onChange} placeholder="Stan" />
                </label>
                <button>Zapisz</button>
            </form>
        )
    }
}

export default AddItem