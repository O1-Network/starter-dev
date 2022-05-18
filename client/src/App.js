import React from 'react';
import MainSection from './components/mainsection/MainSection';
import Footer from './components/footer/footer';
import './style.css';

const App = () => {
  return (
    <div>
      <nav className='col-full grid-container'>
        <h1 className='col-1'>Starter</h1>

        <a className='col-5 navLink' href='#'>
          Login
        </a>
        <a className='col-6 navLink' href='#'>
          Sign Up
        </a>
      </nav>

      <div className='banner-container'>
        <div className='banner-headings'>
          <h3>First Line of Text</h3>
          <h3>Second Line of Text</h3>
        </div>

        <img
          className='banner-image'
          src='https://placekitten.com/200/300'
        ></img>
      </div>

      <MainSection />
      <Footer />
    </div>
  );
};

/*class NavLinks extends React.Component {
  createLinks() {
    
  }
}*/

export default App;
