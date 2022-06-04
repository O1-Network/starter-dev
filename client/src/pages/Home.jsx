import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <Link to="/business">Business</Link>
        <Link to="/developer">Developer</Link>
      </div>
    );
  }
  
  export default Home;