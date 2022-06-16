import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  flex-grow: 1;
  background-color: #f2fcff;
  margin: auto 20%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const UserLink = styled(Link)`
  border: 1px solid black;
  text-decoration: none;

  font-size: 50px;
  vertical-align: center;
  border: none;
  height: 200px;
  width: 200px;
  padding: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: 'Julius Sans One';
  color: white;
`;

const RedUserLink = styled(UserLink)`
  background: #812320;
`;

const BlueUserLink = styled(UserLink)`
  background: #20428c;
`;

const WelcomeContainer = styled.div`
 
  font-family: 'Julius Sans One';
  text-align: center;
  color: black;

`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
const Home = () => {
  return (
    <HomeContainer>
      <WelcomeContainer>
        <h1>Welcome!</h1>
        <h2>What best describes you?</h2>
      </WelcomeContainer>

      <LinksContainer>
        <BlueUserLink to="/developer">Developer</BlueUserLink>
        <RedUserLink to="/business">Business</RedUserLink>
      </LinksContainer>
    </HomeContainer>
  );
};

export default Home;
