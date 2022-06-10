import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  flex-grow: 1;
  background-color: #F2FCFF;
  margin: auto 20%;
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
`;

const UserLink = styled(Link)`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  vertical-align: center;
  height: 20px;
  width: auto;
`;

const Home = () => {
    return (
        <HomeContainer>
          <UserLink to="/business">Business</UserLink>
          <UserLink to="/developer">Developer</UserLink>
        </HomeContainer>
    );
  }
  
  export default Home;