import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterElement = styled.footer`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  width: 100%;
  background-color: #c9f0ff;
`;

export const FooterLinks = styled.section`
  margin: 0 20px;
  display: flex;
`;

export const FooterLink = styled(Link)`
  padding-right: 20px;
  text-decoration: none;

  color: rgb(51, 0, 0);

  &:hover {
    color: rgb(209, 107, 107);
  }

  svg {
    width: 50px;
    height: 50px;
    padding-right: 15px;
  }
`;
