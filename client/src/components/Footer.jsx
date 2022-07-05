import { FooterElement, FooterLinks, FooterLink } from './FooterStyles'

import GithubIcon from '../images/logos/GithubIcon'
import LinkedinIcon from '../images/logos/LinkedinIcon'

export default function Footer() {
  return (
    <FooterElement>
      <FooterLinks>
        <FooterLink to='/about'>About</FooterLink>
        <FooterLink to='/contact'>Contact</FooterLink>
        <FooterLink to='/blog'>Blog</FooterLink>
        <FooterLink to='/developerdashboard'>Developer-Dashboard</FooterLink>
      </FooterLinks>
    </FooterElement>
  );
}
