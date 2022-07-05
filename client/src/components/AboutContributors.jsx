// import GithubIcon from '../images/logos/GithubIcon'
// import LinkedinIcon from '../images/logos/LinkedinIcon'

import Contributor from './Contributor'

// import {
//     ClassificationContainer,
//     Question,
//     ClassificationCard
//   } from './ClassificationStyles';

const ContributorData = [
  {
    fullName: 'John Wick',
    position: 'Software Engineer',
  },
  {
    fullName: 'Alexa James',
    position: 'Software Architect',
  },
  {
    fullName: 'Austin Austin',
    position: 'Software Person',
  },
]

const socialMedia = [
  {
    name: 'Github',
    href: 'https://www.github.com',
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com',
  },
  {
    name: 'Mail',
    href: 'https://www.gmail.com',
  },
]

const Contributors = () => {
  return (
    <>
      {ContributorData.map((contributorDetails) => (
        <Contributor details={null} contributorDetails={contributorDetails} />
      ))}
    </>
  )
}

export default Contributors
