import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ItemImg from '../../images/item.jpg';

const Item = ({
  category,
  name,
  year,
  number,
  description,
  url,
  removeItem,
  isAdmin,
}) => {
  return (
    <Card>
      <CardHeader title={name}/>
      <CardMedia
        image={ItemImg}
        title="radio"
      />
      <CardContent>
        <Typography component="p">
          Rodzaj: {category}
        </Typography>
        <Typography component="p">
          Rok produkcji: {year}
        </Typography>
        <Typography component="p">
          Numer seryjny: {number}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
        {isAdmin &&
          <CardActions>
            <Button variant="contained" color="secondary" onClick={this.removeItem}>
              Usuń
            </Button>
          </CardActions>
        }
      </CardContent>
    </Card>
  );
};

export default Item;
