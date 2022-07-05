import { FooterElement, FooterLinks, FooterLink } from './FooterStyles'

import GithubIcon from '../images/logos/GithubIcon'
import LinkedinIcon from '../images/logos/LinkedinIcon'

export default function Footer() {
  return (
    <>
      <FooterElement>
        <div>
          <h3>STARTER APPLICATION © 2022</h3>
        </div>
        <FooterLinks>
          <FooterLink to="https://www.github.com">
            <GithubIcon />
          </FooterLink>
          <FooterLink to="https://www.linkedin.com">
            <LinkedinIcon />
          </FooterLink>
        </FooterLinks>
      </FooterElement>
    </>
  )
}
