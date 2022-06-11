
import './Intro.css';
import {
  IntroContainer,
  ValueText,
  BenefitsList,
  BenefitsHeader,
  ListItem,ImageContainer 
} from './IntroStyles';
import { useState } from 'react';
const Intro = () => {


const [scrollVal,setScroll]=useState(0);
{/*make responsive to scrolling*/ }
let ticking = false;
document.addEventListener('scroll', function(e) {
lastKnownScrollPosition = window.scrollY;
if (!ticking) {
window.requestAnimationFrame(function() {
doSomething(lastKnownScrollPosition);
ticking = false;
});
ticking = true;
}
});
function doSomething(scrollPos) {
setScroll(-scrollPos/5);
}
  

  return (
    <IntroContainer scroll={scrollVal}>
    
      <ImageContainer  >
       
        <ValueText>If your business is selected, our team of developers will build you a digital tool that takes your business to the next level.
        </ValueText>
      
        <BenefitsList>
          <BenefitsHeader>BENEFITS</BenefitsHeader> 
          <ListItem>Open-Source Engineers</ListItem> 
          <ListItem>Partner with a Nonprofit</ListItem>
          <ListItem>Custom Tools (Need Image)</ListItem>
          <ListItem>Meet your Needs (Need Image)</ListItem>
          <ListItem>Gain an Advantage (Need Image)</ListItem>
        </BenefitsList>
      </ImageContainer >
   </IntroContainer>
  );
}

// https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba
// https://styled-components.com/docs/basics#animations

export default Intro;