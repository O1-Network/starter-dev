import { ContributorContainer } from './ContributorStyles'
import GithubIcon from '../images/logos/GithubIcon'
import LinkedInIcon from '../images/logos/LinkedinIcon'

const Contributor = (props) => {
  const { contributorDetails } = props;
  return (
    <ContributorContainer>
      <img src="" alt="" />

      <h2>{contributorDetails.fullName}</h2>
      <h3>{contributorDetails.position}</h3>

      <GithubIcon />
      <LinkedInIcon />
    </ContributorContainer>
  )
}

export default Contributor
