import React, { Component } from 'react';
import { Container, Box, Input, Button, Title } from '../../styled';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions';
import { post } from '../../api';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { categories } from '../../mock';

class AddItem extends Component {
  state = {
    categoryId: '',
    name: '',
    productionDate: '',
    description: '',
    serialNumber: '',
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ productionDate: new Date(this.state.productionDate) });
    this.props.addItem({ ...this.state });
    post('/equipment', JSON.stringify({ ...this.state }))
      .then(
        this.setState({
          categoryId: '',
          name: '',
          productionDate: '',
          description: '',
          serialNumber: '',
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
          <form onSubmit={this.onSubmit}>
            <TextField
              id="standard-select-type"
              name="categoryId"
              select
              label="Wybierz rodzaj"
              value={this.state.categoryId}
              onChange={this.onChange}
              fullWidth
              margin="normal"
            >
              {categories.map(option => (
                <MenuItem key={option.value} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-name"
              name="name"
              label="Nazwa"
              value={this.state.name}
              onChange={this.onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              id="standard-productionDate"
              name="productionDate"
              label="Rok produkcji"
              value={this.state.productionDate}
              onChange={this.onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              id="standard-number"
              name="serialNumber"
              label="Numer seryjny"
              value={this.state.serialNumber}
              onChange={this.onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              id="standard-description"
              name="description"
              label="Opis"
              multiline
              rowsMax="2"
              value={this.state.description}
              onChange={this.onChange}
              fullWidth
              margin="normal"
            />
            <Input type="file" name="image" placeholder="Dodaj zdjęcie" />
            <Button>Zapisz</Button>
          </form>
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
