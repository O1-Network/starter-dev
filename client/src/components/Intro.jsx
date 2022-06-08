import './Intro.css';
import { useEffect,useState } from 'react';
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
    <div className="intro">
      {console.log(currentImage)}
      <div className={[ "intro-background", Images[currentImage % (Images.length)]].join(' ')} >
        <p className="value-text">If your business is selected, our team of developers will build you a digital tool that takes your business to the next level.
        </p>
      
        <ul className="benefits">
          <h1>BENEFITS</h1>
          <li>Open-Source Engineers</li>
          <li>Partner with a Nonprofit</li>
          <li>Custom Tools (Need Image)</li>
          <li>Meet your Needs (Need Image)</li>
          <li>Gain an Advantage (Need Image)</li>
        </ul>
      </div>
   </div>
  );
}

// https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba
// https://styled-components.com/docs/basics#animations

export default Intro;