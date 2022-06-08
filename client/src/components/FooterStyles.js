import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterElement = styled.footer`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #C9F0FF;
`;

export const FooterLinks = styled.section`
  margin: 0 20px;
  display: flex;
  column-gap:70px;
`;

export const FooterLink = styled(Link)`
  padding-right: 50px;
  text-decoration: none;

  color: rgb(51, 0, 0);

  &:hover {
    color: rgb(209, 107, 107);
  }
`;