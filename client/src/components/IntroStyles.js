import styled from 'styled-components';

export const IntroContainer = styled.div`
  height: auto;
  background-color: #031927;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const BenefitsList = styled.ul`
  padding: 50px;
  color: #C9F0FF;
  list-style-type: circle;
  margin: 20px 0 0 150px;
  font-size: 1.2rem;
  font-size: 100;
  letter-spacing: .2rem;
`;

export const ValueText = styled.p` 
  width: 100%;
  font-family: 'Julius Sans One';
  font-size: 36px;
  letter-spacing: 0.3rem;
  line-height: 3.5rem;
  text-align: center;
  color: #ffffff;
  text-shadow: -1px -1px 10px #C9F0FF, 2px 2px 10px #000000;
  margin-left: 30%;
`; 

export const BenefitsHeader = styled.h1`
  text-shadow: 2px 2px #090909;
`;

 export const ListItem = styled.li`
  padding: 20px; 
`;