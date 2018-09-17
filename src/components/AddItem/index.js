import React, { Component } from 'react';
import { Container, Box, Input, Button, Title, Form, Select } from '../../styled'
import { connect } from 'react-redux';
import { addItem } from '../../store/actions'

class AddItem extends Component {
  state = {
    category: '',
    name: '',
    year: '',
    number: '',
    description: '',
    img: '',
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addItem({...this.state})
    this.setState({
      category: '',
      name: '',
      year: '',
      number: '',
      description: '',
      img: '',
    })
  }

  render() {
    return (
      <Container>
        <Box size='70%'>
          <Title>Dodaj przedmiot</Title>
          <Form onSubmit={this.onSubmit}>
            <Select name="category" value={this.state.category} onChange={this.onChange} placeholder="Kategoria">
              <option selected value='0'>Wybierz</option>
              <option>Amplituner</option>
              <option>Gramofon</option>
              <option>Magnetofon</option>
              <option>Odtwarzacz CD</option>
              <option>Radiomagnetofon</option>
              <option>Radio przenośne</option>
              <option>Radio stołowe</option>
              <option>Tuner</option>
              <option>Wzmacniacz</option>
              <option>Zestawy głośnikowy</option>
              <option>Zestawy wieżowy</option>
              <option>Inne</option>
            </Select>
            <Input type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Nazwa" />
            <Input type="text" name="year" value={this.state.year} onChange={this.onChange} placeholder="Rok produkcji" />
            <Input type="text" name="number" value={this.state.number} onChange={this.onChange} placeholder="Numer seryjny" />
            <Input type="text" name="description" value={this.state.description} onChange={this.onChange} placeholder="Opis" />
            <Input type="file" name="image" placeholder="Dodaj zdjęcie"/>
            <Button>Zapisz</Button>
          </Form>
        </Box>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: (payload) => dispatch(addItem(payload))
})

export default connect(null, mapDispatchToProps)(AddItem)