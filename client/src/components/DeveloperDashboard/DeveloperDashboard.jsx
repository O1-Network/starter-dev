/*
navbar---->David;
profile --->omaran

main section ----> Any interested one


*/
/**
 * Omaran:profile :social links ,skils ,bagdes
 * 
 * David: working on the navbar
 * 
 * Erica:orgainze the relation between the developer and his projects
 * 
 * 
 * pandora :developer technologies
 */

import { useState } from 'react';
import{
   
    Profile,
    ProfilePic,
    Bio,
    Links,
    NavbarStyles,
    NavToggleBtn,
    Projects,
    SampleProjectOne,
  SampleProjectTwo,
    DeveloperDashboardStyles
} from './DeveloperStyles'
const DeveloperDashboard = () => {
    return (
      <DeveloperDashboardStyles>

      <Navbar/>

       <Profile>
          
               <ProfilePic>
                  <img src="https://www.w3schools.com/howto/img_avatar.png" width="80px" />
                  <p>Developer Name</p>
                </ProfilePic>

                <Bio>
                 my name is FirstLast and I have x years of experinece in this tech and this and this .I have worked on this 
                 project and this project for more than y years .<br/>
                 I like to do this and this <br/>
                 please feel free to connect me <br />
                 my name is FirstLast and I have x years of experinece in this tech and this and this .I have worked on this 
                 project and this project for more than y years .<br/>
                 I like to do this and this <br/>
                 please feel free to connect me <br />
                </Bio>

                <Links>
                <img src="https://img.icons8.com/stickers/100/000000/facebook-new--v2.png"/>
                <img src="https://img.icons8.com/stickers/100/000000/linkedin-circled.png"/>
                <img src="https://img.icons8.com/stickers/100/000000/github.png"/>
                <img src="https://img.icons8.com/stickers/100/000000/domain.png"/>
                <img src="https://img.icons8.com/stickers/100/000000/stackoverflow.png"/>
                <img src="https://img.icons8.com/stickers/100/000000/twitter-circled.png"/>
                </Links>
                
        </Profile>
        <Projects>
          <SampleProjectOne>
            <img src="https://www.nicepng.com/png/full/137-1379308_website-work-in-progress.png" width="90px"/>
            <p id="projectTitle">Title of Project</p>
            <p>Description of Project</p>
            <p>Tasks for the project</p>
          </SampleProjectOne>  
        
          <SampleProjectTwo>
            <img src="https://www.nicepng.com/png/full/137-1379308_website-work-in-progress.png" width="90px"/> 
            <p id="projectTitle">Title of Project</p>
            <p>Description of Project</p>
            <p>Tasks for the project</p>
          </SampleProjectTwo>
        </Projects>
      </DeveloperDashboardStyles>

      
    );
}
  
const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => { 
    setNavOpen(!navOpen);
  }

    return (
      <NavbarStyles navOpen={navOpen}>
        <section className='nav-logo'>
          <span>Starter Application</span>
        </section>
        <section className='nav-links'>
          <ul>
            <li>Profile</li>
            <li>Tasks</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Settings</li>
          </ul>
        </section>
        <NavToggleBtn type='button' onClick={toggleNav}>
          MENU
        </NavToggleBtn>
      </NavbarStyles>
    )
  }
  
  export default DeveloperDashboard;