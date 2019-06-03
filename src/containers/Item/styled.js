import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export const CardImage = styled(CardMedia)`
  height: 300px;
  background-size: contain !important;
`;

export const CardWrapper = styled(Card)`
  margin: 10px 0;
`;

export const Text = styled(Typography)`
  margin 5px 0 !important;
`;
