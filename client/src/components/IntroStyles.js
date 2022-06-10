import styled,{ keyframes } from 'styled-components';


const imageList = [
  "https://i.ibb.co/z2gpHwL/tech-Pic-9.jpg",
  "https://i.ibb.co/MfVqXPW/tech-Pic-8.jpg",
  "https://i.ibb.co/6FhNqNv/tech-Pic-3.jpg",
  "https://i.ibb.co/pfj9H4J/tech-Pic-7.jpg",
  "https://i.ibb.co/W2LPGMq/tech-Pic-5.webp",
  "https://i.ibb.co/L6BC5GR/tech-Pic-6.jpg",

]


// let keyFrames = "";
// let percentageIncrement = 100 / imageList.length;
// for(let i = 0; i < imageList.length;i++){
//     if(i === 0 || i === 1 || i === imageList.length -1){
//     keyFrames += `${i * percentageIncrement}%{background-image:url(${imageList[i]});};`;
//     }else{
//         keyFrames += `${(i + 2) * percentageIncrement}%{background-image: url(${imageList[i + 2]});}`;
//     }
// }


const breatheAnimation = keyframes`
0% { background : url(${imageList[0]})  100px 20px no-repeat;}  
4% { background: url(${imageList[0]});}  
12% {background :url(${imageList[1]})}     
38% {background :url(${imageList[2]}) }    
52% {background :url(${imageList[3]}) }     
68% {background :url(${imageList[4]})}     
94% {background :url(${imageList[5]})}     
100% {background :url(${imageList[0]}) }     
`


export const IntroContainer = styled.div`
height: auto;
background-color: #031927;
display: flex;
flex-direction: row;
justify-content: flex-start;
animation-name: ${breatheAnimation};
animation-duration: 20s;
animation-iteration-count: infinite;
background-repeat: no-repeat;
background-size:cover;

`;

export const BenefitsList = styled.ul`
  padding: 50px;
  color: #C9F0FF;
  list-style-type: circle;
  margin: 20px 0 0 150px;
  font-size: 1.2rem;
  font-size: 100;
  letter-spacing: .2rem;
`;

export const ValueText = styled.p` 
  width: 100%;
  font-family: 'Julius Sans One';
  font-size: 36px;
  letter-spacing: 0.3rem;
  line-height: 3.5rem;
  text-align: center;
  color: #ffffff;
  text-shadow: -1px -1px 10px #C9F0FF, 2px 2px 10px #000000;
  margin-left: 30%;
`; 

export const BenefitsHeader = styled.h1`
  text-shadow: 2px 2px #090909;
`;

 export const ListItem = styled.li`
  padding: 20px; 
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

export const ImageContainer = styled.div`
margin: 0 10% 0 10%;
width: 90%;
display: grid;
grid-template-columns: repeat(2, 1fr);
min-height: 45vh;
z-index:0;
place-items: center;
`;
