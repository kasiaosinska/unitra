import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  background-color: grey;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0 40px;
  height: 100%;
`;

export const ElementOnTheRight = styled.li`
  display: block;
  font-weight: 300;
  margin-left: 20px;
  text-decoration: none;

  a {
    font-size: 18px;
    color: #dcdcdc;
  }
`;

export const ElementOnTheLeft = styled.li`
  margin-right: auto;
  font-size: 18px;
  color: #dcdcdc;
  text-decoration: none;
`;
