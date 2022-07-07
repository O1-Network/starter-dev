import styled, { keyframes} from 'styled-components';

export const DeveloperDashboardStyles = styled.div`
   overflow-x: hidden;
`;


export const NavbarStyles = styled.nav`

/* variables for navigation */ 

--navHeight: 100px;

  background:#096fa9;
  height: var(--navHeight);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  color: white;
  display: flex;
  letter-spacing: 1px;
  text-transform: uppercase;
 
  position: relative;
  
   .nav-logo {
      font-size: 2rem;
      padding-left: 2rem;
   
   }
   .nav-links {
       
      padding-right: 2rem;
      display: grid;
      grid-auto-flow: row;
   
         @media(max-width: 992px) {
             background: gray;
             grid-auto-flow: column;
             position: absolute;
             top: var(--navHeight);
             right: 0;
             width: 250px;
             z-index: 2;
             transition: all 0.35s;
             transform: translateX(100%);

             ${props => props.navOpen && `transform: translateX(0);`};
          }

           li{
               list-style: none;
               display: inline-block;
               padding: 0.7rem;
               font-size: 1.1rem;
               font-weight: 100;
               cursor: pointer;
               position: relative;
               transition: all 0.45s;

                   &:after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  z-index: 1;
                  opacity: 0;
                  transition: all 0.2s;
                  border-bottom: 2px solid white;
                  transform: scale(0.1, 1);
               }

               &:hover::after {
                  opacity: 1;
                  transform: scale(1, 1);
               }

               @media(max-width: 992px) {
                  display: block;
                  padding: .5rem 0;
                  
               }
        }
   }
`;

export const NavToggleBtn = styled.button`
   display: none;

   @media(max-width: 992px) {
      display: block;

      background: transparent;
      color: white;
      border: none;
      outline: none;
      padding-right: 2rem;

      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.35s;

      &:hover {
         color: gray;
      }
   }
`;


export const ProfilePic =styled.div`
padding:20px;
display:flex;
justify-content:center;
align-items:center;
background:#bbb;
border-radius:15px;
display:flex;
align-items:center;
justify-content:space-around;
 img {
   border-radius:50%;
   border:4px solid grey;
 }
 p{
   font-size:20px;
 }
`

///styles for the projects component
export const  Projects =styled.div`

`
export const  SampleProjectOne =styled.div`

`
export const  SampleProjectTwo =styled.div`

`


const profile = keyframes`
0% { transform:translateX(-300px);
opacity:0.4;}  
  
100% {transform:translateX(0px);
opacity:1;}   
`

export const Profile =styled.div`
// margin-top:350px;
margin:30px;
padding:30px;
padding-top:35px;
height:60vh;
width:20vw;
background:linear-gradient(rgb(155,155,155) 0% ,rgb(120,120,220) 90% );
border-radius:15px;
display:flex;
flex-direction:column;
position:absolute;
transform:translateX(-300px);
opacity:0.4;
animation-name: ${profile};
animation-fill-mode: forwards;
animation-iteration-count: 1;
animation-duration: 1s;
`

export const Bio = styled.div`
overflow-y:scroll;
height:40%;
letter-spacing:1.5px;
line-height:24px;
padding:15px;
padding-y:20px;
margin-top:20px;
border-radius:5px;
background:rgba(0,0,0,0.6);
color:white;
&::-webkit-scrollbar{
   width:0px;
}
`
export const Links=styled.div`

height:100px;


display:flex;

flex-direction:row;
align-items:center;
justify-content:space-around;

img{
   display:block;
   width:55px;
   ///position:absolute;
   transform:translateY(10px);
   transition:1s;
   cursor:pointer;
   opacity:0.4;
}
img:hover{
   transform:translateY(-10px);
   opacity:1;
}

`