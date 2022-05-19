import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Toggle from './components/Toggle';
import MainSection from './components/MainSection';

import BusinessData from './data/business.json';
import DeveloperData from './data/developer.json';

const App = () => {

  const[sectionType, setSectionType] = useState(DeveloperData);

  const handleClick = (e) => {

    if(e.target.id === "developer-button"){
      setSectionType(DeveloperData);
    } else {
      setSectionType(BusinessData);
    }
  }

  return (
    <div className="app-container">

      <a className="link" href="https://github.com/">Get Started</a>

      <Navigation />
      
      <Intro/>

      <Toggle handleClick={handleClick} />

      <MainSection sectionType={sectionType} />
      
    </div>
  );
}

export default App;