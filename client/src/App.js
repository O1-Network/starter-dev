import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Classification from './components/Classification';
import Footer from './components/Footer';

import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <div className='app-container'>
      <Navigation />

      <Intro />

      <Classification />
      <Footer />

      {/* <Signup />
      
      <Login /> */}

      </div>    

  );
};

export default App;
