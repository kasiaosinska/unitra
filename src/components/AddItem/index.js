import React, { Component } from 'react';
import {
  Container,
  Box,
  Input,
  Button,
  Title,
  Form,
  Select,
} from '../../styled';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions';
import { post } from '../../api';
import { withRouter } from 'react-router-dom';

class AddItem extends Component {
  // TODO add to BE serial number and img

  state = {
    categoryId: '',
    name: '',
    productionDate: '',
    description: '',
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addItem({ ...this.state });
    post('/create', JSON.stringify({ ...this.state }))
      .then(
        this.setState({
          categoryId: '',
          name: '',
          productionDate: '',
          description: '',
        }),
      )
      .catch(err => {
        console.error(err);
        this.props.history.push('/login');
      });
  };

  render() {
    return (
      <Container>
        <Box size="70%">
          <Title>Dodaj przedmiot</Title>
          <Form onSubmit={this.onSubmit}>
            <Select
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.onChange}
              placeholder="Kategoria"
            >
              <option>Wybierz</option>
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
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Nazwa"
            />
            <Input
              type="text"
              name="productionDate"
              value={this.state.productionDate}
              onChange={this.onChange}
              placeholder="Rok produkcji"
            />
            <Input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.onChange}
              placeholder="Numer seryjny"
            />
            <Input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              placeholder="Opis"
            />
            <Input type="file" name="image" placeholder="Dodaj zdjęcie" />
            <Button>Zapisz</Button>
          </Form>
        </Box>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: payload => dispatch(addItem(payload)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(AddItem),
);
