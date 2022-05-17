import React, { useState } from 'react';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Toggle from './components/Toggle';
import MainSection from './components/MainSection';

import './style.css';

const App = () => {

  const businessDemo = {
    type: "Business demo type",
    details: " This is the business info",
    video: "This is the business video"
  }

  const developerDemo = {
    type: "Developer demo type",
    details: " This is the developer info",
    video: "This is the developer video"
  } 

  const[sectionType, setSectionType] = useState(developerDemo);

  const handleClick = (e) => {
    console.log(e);
    console.log(e.target);


    if(e.target.id === "developer-button"){
      setSectionType(developerDemo);
    } else {
      setSectionType(businessDemo);
    }
  } 

  return (
    <div className="app-container">

      <Nav />
      
      <Intro/>

      <MainSection />
      
    </div>
  );
}

export default App;