import styled from 'styled-components';
import image from '../../images/main.jpg';

export const Container = styled.div`
  height: calc(100vh - 50px);
  background-image: url(${image});
  background-position: center center;
  background-size: cover;
`;
