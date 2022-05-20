import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Toggle from './components/Toggle';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import BusinessData from './data/business.json';
import DeveloperData from './data/developer.json';

console.log(BusinessData);

const App = () => {
  const [sectionType, setSectionType] = useState(DeveloperData);

  console.log(sectionType);

  const handleClick = (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'developer-button') {
      setSectionType(DeveloperData);
    } else {
      setSectionType(BusinessData);
    }
  };

  return (
    <div className='app-container'>
      <Navigation />

      <Intro />

      <Toggle handleClick={handleClick} />

      <MainSection sectionType={sectionType} />
      <Footer />
    </div>
  );
};

export default App;
