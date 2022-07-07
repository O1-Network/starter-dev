//https://www.figma.com/file/t0NOeN2itnaubxtzXETNR9/Starter-Application?node-id=118%3A8

import jsLogos from '../images/logos/jsLogos.png'
import dbLogos from '../images/logos/dbLogos.png'
import serverLogos from '../images/logos/backendLogos.png'

import {
    DevLandingContainer,
    DevIntroBox,
    DevP,
    DevMain,
    MainHeader,
    ChooseYourPath,
    PathContainer,
    PathHeader,
    Path,
    PathImage,
    Projects,
    ProjectContainer,
    ProjectH3,
    ProjectP,

} from './DeveloperLandingStyles'

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