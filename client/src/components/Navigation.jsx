import {
  NavStyle,
  NavContainer,
  NavLinkBrand,
  NavLink,
} from './NavigationStyles'

const navItems = [
  { name: 'About', herf: '/about' },
  { name: 'Contact', herf: '/contact' },
  { name: 'Blog', herf: '/blog' },
]

const Navigation = () => {
  return (
    <NavStyle>
      <NavContainer>
        <NavLinkBrand to="/">Starter Application</NavLinkBrand>
        {navItems.map((item) => (
          <NavLink to={item.herf}>{item.name}</NavLink>
        ))}
      </NavContainer>
    </NavStyle>
  )
}

export default Navigation
