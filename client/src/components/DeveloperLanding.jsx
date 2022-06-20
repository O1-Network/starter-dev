//im running with it
//wheres the figma doc link
/*
Idk Ill ask..eventually
*/
//omg ... found it
//https://www.figma.com/file/t0NOeN2itnaubxtzXETNR9/Starter-Application?node-id=118%3A8

import styled from 'styled-components';
import jsLogos from '../images/logos/jsLogos.png'
import dbLogos from '../images/logos/dbLogos.png'
import serverLogos from '../images/logos/backendLogos.png'

const DevLandingContainer = styled.main`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    padding:0;
    width: 100%;
    background: #F2FCFF;
`;

const DevIntroBox = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    width:100%;
    height: 25vh;
    background-color: maroon;
    font-family: 'Julius Sans One', san-serif;

`;

const DevP = styled.p`
    color: white;
    margin: 0;
    padding: 20px;
    font-size: 1.2rem;
    font-weight: 400;
`;

const DevMain = styled.main`
    background-color: #F2FCFF;
`
const MainHeader = styled.h2`
    text-align: center;
    font-size:1rem;
    padding: 1rem;
    margin-left: 4rem;
    margin-right:4rem;
    font-family: 'Julius Sans One', san-serif;
    
    @media (min-width: 668px) {
    font-size:2rem;
  }
`

const ChooseYourPath = styled.section`
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const PathHeader = styled.h4`
     font-family: 'Julius Sans One', san-serif;
     font-size: .85rem;   
    @media (min-width: 668px) {
    font-size: 1.25rem;
  }
`
const PathContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    @media (min-width:668px){
        flex-direction: row;
   } 
`
const Projects = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ProjectContainer = styled.div`
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
`
const Path = styled.div`
    padding: 1.69rem;
    margin:  .4rem;
    

`
const PathImage = styled.img`
    
`
const Button = styled.button`

`;

const ProjectH3 = styled.h3`
    font-height:1.6rem;
`

const ProjectP = styled.p`
    font-height:1.2rem;
`
const DevLanding = () => {

    return(
    <DevLandingContainer>
    <DevIntroBox>
        <DevP>the clear path</DevP>
        <DevP>a jump start</DevP>
        <DevP>the bridge to the future </DevP>
    </DevIntroBox>
    <DevMain>
        <MainHeader>I WANT TO GET HANDS-ON DEVELOPMENT EXPERIENCE WHILE SUPPORTING CAUSES THAT MATTER T0 ME</MainHeader>
        <ChooseYourPath>
        <PathHeader>Choose the technologies you want to learn </PathHeader>
        <PathContainer>
            <Path><PathImage src={jsLogos}/></Path>
            <Path>  <PathImage src={serverLogos}/></Path>
            <Path>   <PathImage src={dbLogos}/></Path>
        </PathContainer>
       </ChooseYourPath>
<ChooseYourPath>
    <PathHeader>Choose a project you would like to work on</PathHeader> 
    <Projects>
        <ProjectContainer>
            <ProjectH3>Starter</ProjectH3>
            <ProjectP>some more info</ProjectP>
          </ProjectContainer>
        <ProjectContainer>
            <ProjectH3>Starter</ProjectH3>
            <ProjectP>some more info</ProjectP>
          </ProjectContainer>
        <ProjectContainer>
            <ProjectH3>Starter</ProjectH3>
            <ProjectP>some more info</ProjectP>
          </ProjectContainer>
    </Projects>
        
</ChooseYourPath>
          
          
        
        
    </DevMain>
    </DevLandingContainer>
    )
}

export default DevLanding;