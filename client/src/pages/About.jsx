import AboutTextBox from '../components/AboutTextBox'
import AboutContributors from '../components/AboutContributors'

const About = () => {
  return (
    <>
      <div className="Text-box">
        <AboutTextBox />
          <h3>We love showing off our coding skills and projects we can do for you.</h3>
          <AboutContributors />
      </div>
    </>
  )
}
export default About
