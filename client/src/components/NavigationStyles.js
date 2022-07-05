import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavStyle = styled.nav`
    z-index: 1000;
    height: auto;
    background: #F2FCFF;
    padding: 15px;
    display: block;
    position: sticky;
    top: 0;

`;

export const NavContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20%;
`;

export const NavLinkBrand = styled(Link)`

    flex-grow: 1;
    margin-right: 1rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    text-decoration: none;
    color: #BA1200;
    text-shadow: -3px -3px 5px rgba(255, 204, 204, 0.25), -1px -1px 3px rgba(255, 204, 204, 0.25), 1px 1px 3px rgba(51, 0, 0, 0.25), 3px 3px 5px rgba(51, 0, 0, 0.32);
`;

export const NavLink = styled(Link)`

    margin-right: 1rem;
    width: 110px;
    height: 30px;
    background: #F2FCFF;
    border-style: none;
    box-shadow: -1px -1px 3px rgba(255, 230, 230, 0.5), -3px -3px 5px rgba(255, 230, 230, 0.5), 3px 3px 5px rgba(51, 0, 0, 0.3), 1px 1px 3px rgba(51, 0, 0, 0.3);
    border-radius: 5px;
    color: #BA1200;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #fff1f1;
    }
`;