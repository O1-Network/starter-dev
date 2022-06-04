import {
  FooterElement,
  FooterLinks,
  FooterLink
} from './FooterStyles';

export default function Footer() {
  return (
    <FooterElement>
      <FooterLinks>
        <FooterLink to='/about'>About</FooterLink>
        <FooterLink to='/contact'>Contact</FooterLink>
        <FooterLink to='/blog'>Blog</FooterLink>
      </FooterLinks>
    </FooterElement>
  );
}