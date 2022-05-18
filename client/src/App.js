import React, { useState } from 'react';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Toggle from './components/Toggle';
import MainSection from './components/MainSection';

const App = () => {

  const businessDemo = {
    type: "Business demo type",
    text: "This is a bunch of information that sounds good to a business and encourages them to work with us. This section talks about the benefits of getting technology like websites, internal business tools, databases, and many other options.",
    details: "This is the business info",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    img: "http://via.placeholder.com/360x240",
    imgAlt: "business placeholder",
    learn: "If you want to see or hear more, click this link. This link is going to open up more options for businesses and nonprofits to get more information about the products and services available, the charity work, etc etc etc."
  }

  const developerDemo = {
    type: "Developer demo type",
    text: "This is a bunch of information about the benefits of using this website for a developer. Developers should use this site because they will be benefited in all of these ways.",
    details: "This is the developer info",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    img: "http://via.placeholder.com/360x240",
    imgAlt: "developer placeholder",
    learn: "If you want to see or hear more, click this link. This link is going to open up more options for developers to get more information about the products and services available, etc etc etc."
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

      <Navigation />
      
      <Intro/>

      <Toggle handleClick={handleClick} />

      <MainSection sectionType={sectionType} />
      
    </div>
  );
}

export default App;