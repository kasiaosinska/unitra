import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/addItem'

class AddItem extends Component {
  state = {
    category: '',
    name: '',
    img: '',
    description: '',
    condition: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addItem({...this.state})

  }

  render() {
    return (
      <form className="entryForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Kategoria</label>
          <select name="category" className="form-control" value={this.state.category} onChange={this.onChange}>
            <option selected>Wybierz</option>
            <option>Kategoria1</option>
            <option>Kategoria2</option>
            <option>Kategoria3</option>
            <option>Kategoria4</option>
          </select>
        </div>
        <div className="form-group">
          <label>Nazwa</label>
          <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Nazwa" />
        </div>
        <div className="form-group">
          <label>Opis</label>
          <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Opis" />
        </div>
        <div className="form-group">
          <label>Stan</label>
          <input type="text" className="form-control" name="condition" value={this.state.condition} onChange={this.onChange} placeholder="Stan" />
        </div>
        <div className="form-group">
        <label>Dodaj zdjęcie</label>
          <input type="file" className="form-control-file" name="image" />
        </div>
        <button className="btn btn-danger">Zapisz</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: (payload) => dispatch(addItem(payload))
})

export default connect(null, mapDispatchToProps)(AddItem)