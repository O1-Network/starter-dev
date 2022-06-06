import './Intro.css';
import {useEffect,useState} from 'react'
const Intro = () => {
  const Images=[
  "image1-start","image1-middle","image1-middle","image1-middle","image1-middle","image1-middle","image1-middle","image1-middle","image1-end",
  "image2-start","image2-middle","image2-middle","image2-middle","image2-middle","image2-middle","image2-middle","image2-middle","image2-end",
  "image3-start","image3-middle","image3-middle","image3-middle","image3-middle","image3-middle","image3-middle","image3-middle","image3-end",
  "image4-start","image4-middle","image4-middle","image4-middle","image4-middle","image4-middle","image4-middle","image4-middle","image4-end",
  "image5-start","image5-middle","image5-middle","image5-middle","image5-middle","image5-middle","image5-middle","image5-middle","image5-end",
  "image6-start","image6-middle","image6-middle","image6-middle","image6-middle","image6-middle","image6-middle","image6-middle","image6-end"
  ]
const [currentImage,setImage]=useState(0);
useEffect(()=>{
setInterval(()=>{setImage(old=>old+1)},1000)
},[])


    return (
      <div className="intro" >
     
        <div className={[ "intro-background",Images[currentImage%(Images.length)]].join(' ')} > 
          <p className="value-text">If your business is selected, our team of developers will build you a digital tool that takes your business to the next level.
          </p>
          {/* https://placeimg.com/640/480/tech */}
        
          <ul className="benefits">
            <h1>BENEFITS</h1>
            <li>Open-Source Engineers</li>
            {/* (https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) */}
            <li>Partner with a Nonprofit</li>
            {/* (https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) */}
            <li>Custom Tools (Need Image)</li>
            {/*Find something or make an image like: https://www.sazanconsulting.com/wp-content/uploads/2014/04/AAEAAQAAAAAAAAedAAAAJDMzNDYxN2I5LThmYTQtNDAxYy05OTc4LWEwN2E3YTdlY2EyZg.jpg 
            OR https://wcs.uwo.ca/srs/upload/bannerfs.png  */}
            <li>Meet your Needs (Need Image)</li>
            {/*https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80           https://images.unsplash.com/photo-1510130146128-7a7b6afb6f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80    */ }
            <li>Gain an Advantage (Need Image)</li>
            {/*https://images.unsplash.com/photo-1543092587-d8b8feaf362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 */}
          </ul>
      </div>
   </div>
    );
}

export default Intro;