import {
  AboutHeader,
  MaxWrapper,
  AboutWrapper,
  AboutNav,
  AboutBody,
  AboutPage,
  AboutList,
  BodyWrapper,
  TextWrapper,
  ListItem,
} from './AboutStyles'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <AboutPage>
      <AboutHeader>
        <MaxWrapper>
          <AboutWrapper>
            <AboutHeader>Starter Application</AboutHeader>
            <AboutNav>
              <ListItem>
                <Link to="#about">About</Link>
              </ListItem>
              <ListItem>
                <Link to="">Contact</Link>
              </ListItem>
              <ListItem>
                <Link to="">Blog</Link>
              </ListItem>
            </AboutNav>
          </AboutWrapper>
        </MaxWrapper>
      </AboutHeader>
      <AboutBody>
        <BodyWrapper>
          <MaxWrapper>
            <TextWrapper></TextWrapper>
          </MaxWrapper>
        </BodyWrapper>
      </AboutBody>
    </AboutPage>
  )
}

export default About

// About Starter We are a dedicated group of developers who will build
// and create innovative applications that will grow your business and
// make it universally accessible by making a positive impact in the
// communities where we live and work. Our passion is shipping quality
// software to fit your needs on a consistent schedule.
