import React, { Component } from 'react';
import { Container, Box, Input, Button, Title, Form, Select } from '../../styled'
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
      <Container>
        <Box size='70%'>
          <Title>Dodaj przedmiot</Title>
          <Form onSubmit={this.onSubmit}>
            <Select name="category" value={this.state.category} onChange={this.onChange} placeholder="Kategoria">
              <option selected value='0'>Wybierz</option>
              <option>Kategoria1</option>
              <option>Kategoria2</option>
              <option>Kategoria3</option>
              <option>Kategoria4</option>
            </Select>
            <Input type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Nazwa" />
            <Input type="text" name="description" value={this.state.description} onChange={this.onChange} placeholder="Opis" />
            <Input type="text" name="condition" value={this.state.condition} onChange={this.onChange} placeholder="Stan" />
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