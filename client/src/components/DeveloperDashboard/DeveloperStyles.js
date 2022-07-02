import styled from 'styled-components';

export const NavbarStyles = styled.nav`
  background:#096fa9;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;
  display: flex;
  letter-spacing: 1px;

     text-transform: uppercase;

   .nav-logo {
      font-size: 2rem;
      padding-left: 2rem;
   
   }
   .nav-links {
      padding-right: 2rem;

        li{
          list-style: none;
          display: inline-block;
          padding: 2rem;
          font-size: 1.3rem;
          font-weight: 100;
        }
        
        .blog-btn {
         position: relative;
         
            &:after {
               content: 'V';
               position: absolute;
               right: 0.5rem;
               color: black
            }
      }
   }
`;


export const ProfilePic =styled.div`
padding:20px;
display:flex;
justify-content:center;
align-items:center;
background:#bbb;

 img {
   border-radius:50%;
 }
`



export const Profile =styled.div`
// margin-top:350px;
margin:30px;
padding:20px;
height:60vh;
width:20vw;
background:#ccc;
border-radius:15px;
display:flex;
flex-direction:column;
`

export const Bio = styled.div`
overflow-y:scroll;
height:40%;
&::-webkit-scrollbar{
   width:0px;
}
`
export const Skills=styled.div`
width:100%;
height:100px;
padding:20px
span{
   margin:20px;
   background:rgba(125,125,0,0.1);
}

`