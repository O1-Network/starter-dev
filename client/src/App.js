import React, { useState } from 'react';
import Intro from './components/Intro';
import MainSection from './components/MainSection';
import Navigation from './components/Navigation';
import Toggle from './components/Toggle';
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
    <div>

      <Navigation/>
      
      <Intro/>

      <Toggle handleClick={handleClick} type={sectionType}/>
      
      <MainSection sectionType = {sectionType} />
      
    </div>
  );
}

export default App;