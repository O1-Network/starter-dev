import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Business from './pages/Business';
import Developer from './pages/Developer';
import Signup from './components/SignupForm';
import Login from './components/LoginForm';

import Blog from './components/BlogArticle';

import About from './components/About';

import Contact from './components/Contact';

const App = () => {
  return (
    <div className='app-container'>
     
      <Navigation />

      <div className="route-container">
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
      </div>
      
      <Footer />
      
    </div>    

  );
};

export default App;

// Load up the different sectors from the NAICS object/array
// Choose which sector you're business is in
// Overwrite the classification object with the sector that your business is in
// Change the data in the title and the data creating the classification divs by changing the state of the nextClassification state object