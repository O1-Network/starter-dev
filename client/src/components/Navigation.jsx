import { NavStyle, NavContainer, NavLinkBrand, NavLink } from './NavigationStyles'; 

const Navigation = () => {
    return (
        <NavStyle>
            <NavContainer>
                <NavLinkBrand to="/" className="brand-name">Starter</NavLinkBrand>
                <NavLink to='/login' className="nav-button">Login</NavLink>
                <NavLink to='/signup' className="nav-button">Signup</NavLink>
            </NavContainer>
        </NavStyle>
    );
}

export default Navigation;