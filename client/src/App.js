// EXTERNAL MODULES // EXTERNAL MODULES // EXTERNAL MODULES
import React from 'react';
import { Routes, Route } from 'react-router';
// LAYOUT // LAYOUT // LAYOUT // LAYOUT // LAYOUT 
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// ROUTES // ROUTES // ROUTES // ROUTES // ROUTES 
import Home from './pages/Home';
import Business from './pages/Business';
import Developer from './pages/Developer';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Blog from './pages/Blog';
// STYLES // STYLES // STYLES // STYLES // STYLES 
import {
  AppContainer,
  HeaderContainer,
  RouteContainer,
  FooterContainer
} from './AppStyles';

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
    <AppContainer>
      
      <Navigation />
      
      <RouteContainer>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/developer' element={<Developer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </RouteContainer>
      
      <Footer />
      
    </AppContainer>    

  );
};

export default App;

// Load up the different sectors from the NAICS object/array
// Choose which sector you're business is in
// Overwrite the classification object with the sector that your business is in
// Change the data in the title and the data creating the classification divs by changing the state of the nextClassification state object