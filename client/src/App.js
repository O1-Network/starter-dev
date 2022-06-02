import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
// import Classification from './components/Classification';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

import Signup from './components/Signup';
import Login from './components/Login';

import NAICS from './data/naics';

import Blog from './components/Blog';

import About from './components/About';

import Contact from './components/Contact';

const App = () => {
  // let [nextClassification, setNextClassification] = useState(NAICS.sectors);
  // let [classification, setClassification] = useState({
  //   "sector" : null,
  //   "subsector" : null,
  //   "industry_group" : null,
  //   "industry" : null,
  //   "detail_industry" : null
  // });

  // let classificationProperty;
  // if (classification.sector === null) {
  //   classificationProperty = "sector";
  // } else if (classification.subsector === null) {
  //   classificationProperty = "subsector";
  // } else if (classification.industry_group === null) {
  //   classificationProperty = "industry_group";
  // } else if (classification.industry === null) {
  //   classificationProperty = "industry";
  // } else if (classification.detail_industry === null) {
  //   classificationProperty = "detail_industry";
  // }

  // const handleClassificationModification = (e) => {
  //   setClassification({...classification, [classificationProperty] : e.target.innerText });
  //   setNextClassification(NAICS.sectors[e.target.attributes[0].nodeValue].subsectors)
  // }

  // console.log(classification);

  return (
    <div className='app-container'>
      <Navigation />

      <Intro />

      <MainSection />
      {/* <Classification classification={classification} nextClassification={nextClassification} handleClassificationModification={handleClassificationModification} /> */}
      <Blog />
      <About />
      <Contact />
      <Footer />

      {/* <Signup />
      
      <Login /> */}

    </div>    

  );
};

export default App;

// Load up the different sectors from the NAICS object/array
// Choose which sector you're business is in
// Overwrite the classification object with the sector that your business is in
// Change the data in the title and the data creating the classification divs by changing the state of the nextClassification state object