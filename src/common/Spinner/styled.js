import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    }
  100% {
    transform: rotate(360deg);
   }
`;

export const SpinnerWrapper = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid grey;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
  margin: 50px auto;
`;
