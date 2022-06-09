import { useEffect, useState } from 'react';
import './Intro.css';

import {
  IntroContainer,
  ValueText,
  BenefitsList,
  BenefitsHeader,
  ListItem,
} from './IntroStyles';

const Intro = () => {
  const Images=[
  "image1-start","image1-middle","image1-middle","image1-middle","image1-middle","image1-middle","image1-middle","image1-middle","image1-end",
  "image2-start","image2-middle","image2-middle","image2-middle","image2-middle","image2-middle","image2-middle","image2-middle","image2-end",
  "image3-start","image3-middle","image3-middle","image3-middle","image3-middle","image3-middle","image3-middle","image3-middle","image3-end",
  "image4-start","image4-middle","image4-middle","image4-middle","image4-middle","image4-middle","image4-middle","image4-middle","image4-end",
  "image5-start","image5-middle","image5-middle","image5-middle","image5-middle","image5-middle","image5-middle","image5-middle","image5-end",
  "image6-start","image6-middle","image6-middle","image6-middle","image6-middle","image6-middle","image6-middle","image6-middle","image6-end"
  ]
  const [currentImage, setImage]=useState(0);

  useEffect(()=>{
    setInterval(()=>{setImage(old => old + 1)},300);
  },[]);

  return (
    <IntroContainer>
      {console.log(currentImage)}
      <div className={[ "intro-background", Images[currentImage % (Images.length)]].join(' ')} >
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
      </div>
   </IntroContainer>
  );
}

// https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba
// https://styled-components.com/docs/basics#animations

export default Intro;