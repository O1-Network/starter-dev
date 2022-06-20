import styled from 'styled-components'

export const DevLandingContainer = styled.main`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    padding:0;
    width: 100%;
    background: #F2FCFF;
`;

export const DevIntroBox = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    width:100%;
    height: 25vh;
    background-color: maroon;
    font-family: 'Julius Sans One', san-serif;

`;

export const DevP = styled.p`
    color: white;
    margin: 0;
    padding: 20px;
    font-size: 1.2rem;
    font-weight: 400;
`;

export const DevMain = styled.main`
    background-color: #F2FCFF;
`;
export const MainHeader = styled.h2`
    text-align: center;
    font-size:1rem;
    padding: 1rem;
    margin-left: 4rem;
    margin-right:4rem;
    font-family: 'Julius Sans One', san-serif;
    
    @media (min-width: 668px) {
    font-size:2rem;
  }
`;

export const ChooseYourPath = styled.section`
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
export const PathHeader = styled.h4`
     font-family: 'Julius Sans One', san-serif;
     font-size: .85rem;   
    @media (min-width: 668px) {
    font-size: 1.25rem;
  }
`;
export const PathContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    @media (min-width:668px){
        flex-direction: row;
   } 
`;
export const Projects = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFDCDC;
    padding: 1rem;
    margin:1rem;

    /* @media (min-width:668px){
        flex-direction: row;
        }  */
`;
export const Path = styled.div`
    padding: 1.69rem;
    margin:  .4rem;
    
`
export const PathImage = styled.img`
    
`;

export const Button = styled.button`

`;

export const ProjectH3 = styled.h3`
    font-height:1.6rem;
`;

export const ProjectP = styled.p`
    font-height:1.2rem;
`