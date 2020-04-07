import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ImgPlaceholder from '../../images/photo-placeholder.jpg';
import { CardImage, CardWrapper, Text } from './styled';

const Item = ({
  category,
  name,
  year,
  number,
  description,
  removeItem,
  url,
  showRemoveButton,
}) => {
  return (
    <CardWrapper>
      {name && <CardHeader title={name} />}
      <CardImage image={url || ImgPlaceholder} title="radio" />
      <CardContent>
        <Text component="p">Rodzaj: {category || ''}</Text>
        <Text component="p">Rok produkcji: {year || ''}</Text>
        <Text component="p">Numer seryjny: {number || ''}</Text>
        <Text component="p">{description || ''}</Text>
        {showRemoveButton && (
          <CardActions>
            <Button variant="contained" color="secondary" onClick={removeItem}>
              Usuń
              <DeleteIcon />
            </Button>
          </CardActions>
        )}
      </CardContent>
    </CardWrapper>
  );
};

export default Item;
