import styled from 'styled-components';

export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  padding: 0 40px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Text = styled.p`
  padding: 50px 0;
  text-align: center;
`;
