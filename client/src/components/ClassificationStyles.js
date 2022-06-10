import styled from 'styled-components';

export const ClassificationContainer = styled.div`
  margin: 0 20%;
  padding: 0 0 50px 0;
  background-color: #F2FCFF;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
`;

export const Question = styled.h1`
  color: #031927;
  width: 100%;
  font-family: 'Julius Sans One';
  font-size: 64px;
  text-align: center;
  text-shadow: -3px -3px 5px rgb(255, 255, 255, 0.5), -1px -1px 3px rgb(255, 204, 204, 0.5), 1px 1px 3px rgba(51, 0, 0, 0.5), 3px 3px 5px rgba(51, 0, 0, 0.5);
`;

export const ClassificationCard = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 20px;
  text-align: center;
  background: #F2FCFF;
  box-shadow: -1px -1px 3px rgba(255, 230, 230, 0.5), -3px -3px 5px rgba(255, 230, 230, 0.5), 3px 3px 5px rgba(51, 0, 0, 0.3), 1px 1px 3px rgba(51, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #fff1f1;
  }
`;