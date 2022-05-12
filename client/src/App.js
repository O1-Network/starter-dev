import React from 'react';
import MainSection from './components/MainSection';
import './style.css';

const App = () => {
  return (
    <div>

      <nav class="col-full grid-container">
        <h1 class="col-1">Starter</h1>

        <a class="col-5 navLink" href="#">Login</a>
        <a class="col-6 navLink" href="#">Sign Up</a>
          
      </nav>
      


      <div class="banner-container">
        
          <div class="banner-headings">
            <h3>First Line of Text</h3>
            <h3>Second Line of Text</h3>
          </div>
          
          <img class="banner-image" src="https://placekitten.com/200/300"></img>
        
      </div>





      <MainSection />
      
    </div>
  );
}

/*class NavLinks extends React.Component {
  createLinks() {
    
  }
}*/

export default App;