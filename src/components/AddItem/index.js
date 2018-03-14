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
                <div className="form-group">
                    <label>Kategoria</label>
                    <select id="inputState" className="form-control" value={this.state.category} onChange={this.onChange}>
                        <option selected>Wybierz</option>
                        <option>Kategoria1</option>
                        <option>Kategoria2</option>
                        <option>Kategoria3</option>
                        <option>Kategoria4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Nazwa</label>
                    <input type="text" className="form-control" id="itemName" value={this.state.name} onChange={this.onChange} placeholder="Nazwa" />
                </div>
                <div className="form-group">
                    <label>Opis</label>
                    <input type="text" className="form-control" id="itemDescription" value={this.state.name} onChange={this.onChange} placeholder="Opis" />
                </div>
                <div className="form-group">
                    <label>Stan</label>
                    <input type="text" className="form-control" id="itemCondition" value={this.state.condition} onChange={this.onChange} placeholder="Stan" />
                </div>
                <div className="form-group">
                <label>Dodaj zdjęcie</label>
                    <input type="file" className="form-control-file" id="image" />
                </div>
                <button className="btn btn-danger">Zapisz</button>
            </form>

        )
    }
}

export default AddItem