import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ecf0f1;
  padding: 50px;
  height: calc(100vh - 50px);
`;

export const ErrorMessage = styled.p`
  color: #db3445;
  text-align: center;
`;

export const Box = styled.div`
  margin: 20px auto;
  padding: 25px;
  width: ${props => props.size};
  background-color: #fff;
  border-radius: 5px;
`;

export const Title = styled.h3`
  text-align: center;
  color: grey;
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  background-color: #ecf0f1;
  border: 2px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 200;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  width: 100%;
  transition: border 0.5s;
  margin: 10px 0;
  outline: none;

  &:focus {
    border: 2px solid #a20c0b;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  margin: 10px 0 10px 0;
  cursor: pointer;
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
