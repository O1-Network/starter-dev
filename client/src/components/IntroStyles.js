import styled,{ keyframes } from 'styled-components';
import image1 from '../images/intro_images/1.jpg'
import image2 from '../images/intro_images/2.jpg'
import image3 from '../images/intro_images/3.jpg'
import image4 from '../images/intro_images/4.jpg'
import image5 from '../images/intro_images/5.jpg'
import image6 from '../images/intro_images/6.jpg'

const imageList = [image1,image2,image3,image4,image5,image6]

// let keyFrames = "";
// let percentageIncrement = 100 / imageList.length;
// for(let i = 0; i < imageList.length;i++){
//     if(i === 0 || i === 1 || i === imageList.length -1){
//     keyFrames += `${i * percentageIncrement}%{background-image:url(${imageList[i]});};`;
//     }else{
//         keyFrames += `${(i + 2) * percentageIncrement}%{background-image: url(${imageList[i + 2]});}`;
//     }
// }


/**

*idea5 mask with scroll menu behind it 

   breaking points :1200px ,768px :widing the benfif section 
  breaking point :768px for beneift slide behind the value (mask)

  ///done 1200 px resposive (medium screen)
 */
const breatheAnimation = keyframes`
0% { background-image: url(${imageList[0]})}  
4% { background-image: url(${imageList[0]})} 
12% {background-image :url(${imageList[1]})}  
38% {background-image :url(${imageList[2]})}     
52% {background-image :url(${imageList[3]})}     
68% {background-image :url(${imageList[4]})}     
94% {background-image :url(${imageList[5]})}    
100% {background-image :url(${imageList[0]})}   
`
export const IntroContainer = styled.div`


height: auto;
display: flex;
align-items: center;
justify-content: center;
height: fit-content;
animation-name: ${breatheAnimation};
animation-iteration-count: infinite;
animation-duration: 20s;
background-repeat: no-repeat;
background-size: cover;
background-position: 0px ${props=>props.scroll}px;
z-index: -1;

`;

/** Responsive small screens animation */
//-30px :::benefit 1
//-80px for each slide 

const benefitAnimation = keyframes`
0% { transform: translatey(-30)}  
33% { transform: translatey(-110px)}  
66% {transform: translatey(-190px)}     
99% {transform: translatey(-270px)} 
100% {transform: translatey(-30px)}     


//99% {transform: translatey(-290px)}  
//100% {transform: translatey(-30px)}     
`
export const Dropdown = styled.div`
 display:none;
  
 @media(max-width:992px){
  height:20px;
  overflow:hidden;
  background:rgba(125,125,125,0.8);
  padding:20px;
  width:fit-content;
  margin:auto;
  display:block;
  

}

`;

export const Sliding = styled.div`
@media(max-width:992px){
  position:relative;
  display: flex;
  flex-direction: column;
  animation-iteration-count: infinite;
  animation-duration: 10s;
  animation-name: ${benefitAnimation};
}
`;

export const LargeScreen = styled.div`



@media(max-width:992px){
   display:none;
 }

`;


/*need styling */
export const BenefitsList = styled.ul`

  padding: 50px;
  color: #C9F0FF;
  list-style-type: circle;
  margin: 0px 0 0 150px;
  font-size: 1.2rem;
  letter-spacing: .2rem;
  width:70%;
  line-height:2rem;
  background-color: rgba(25,25,25, .8);
  padding:100px;
  height:100%;

@media(max-width:1200px){
  margin: 0px 0 0 0px;

}
@media(max-width:992px){
  display:none;

}
`;
/*need styling */
export const ValueText = styled.p` 
display:flex;
flex-flow:column;
justify-content:center;
padding: 50px;
color: #C9F0FF;
list-style-type: circle;
margin: 20px 0 0 150px;
font-size: 1.2rem;
font-size: 100;
letter-spacing: .2rem;
background-color: rgba(79, 11, 11, .8);
height:100%;
margin-top: ${props=>props.scroll}px;
border-radius:10px;
line-height:2em;
font-size:1.25em;
@media(max-width:1200px){
  margin: 20px;
  padding: 100px;

}
`; 

export const BenefitsHeader = styled.h1`
  text-shadow: 2px 2px #090909;
`;

 export const ListItem = styled.li`

`;


/*
<a href="https://ibb.co/2PRjNbh"><img src="https://i.ibb.co/L6BC5GR/tech-Pic-6.jpg" alt="tech-Pic-6" border="0"></a>
<a href="https://ibb.co/TgsbY7p"><img src="https://i.ibb.co/W2LPGMq/tech-Pic-5.webp" alt="tech-Pic-5" border="0"></a>
<a href="https://ibb.co/hC5GJjK"><img src="https://i.ibb.co/DLXBHy7/tech-Pic-4.jpg" alt="tech-Pic-4" border="0"></a>
<a href="https://ibb.co/TtXrNrK"><img src="https://i.ibb.co/6FhNqNv/tech-Pic-3.jpg" alt="tech-Pic-3" border="0"></a>
<a href="https://ibb.co/CJZmXB7"><img src="https://i.ibb.co/N1Ptkxj/tech-Pic-2.jpg" alt="tech-Pic-2" border="0"></a>
<a href="https://ibb.co/ggk5xqs"><img src="https://i.ibb.co/12FDkyH/tech-Pic-1.jpg" alt="tech-Pic-1" border="0"></a>
*/
/*
<a href="https://ibb.co/GMDy3j1"><img src="https://i.ibb.co/z2gpHwL/tech-Pic-9.jpg" alt="tech-Pic-9" border="0"></a>
<a href="https://ibb.co/m0qQxh1"><img src="https://i.ibb.co/MfVqXPW/tech-Pic-8.jpg" alt="tech-Pic-8" border="0"></a>
<a href="https://ibb.co/wShxnpM"><img src="https://i.ibb.co/pfj9H4J/tech-Pic-7.jpg" alt="tech-Pic-7" border="0"></a>
*/


// let percentageIncrement = 100 / Images.length;

// imageList.reduce((keyFrames,image,i) =>{
//   return keyFrames += `${i * percentageIncrement}%{background-image:url(${image});}`
// },"")

///link1:

