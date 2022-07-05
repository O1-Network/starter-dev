/*
navbar---->David;
profile --->omaran

main section ----> Any interested one


*/



import{
   
    Profile,
    ProfilePic,
    Bio,
    Skills,

    NavbarStyles

} from './DeveloperStyles'
const DeveloperDashboard = () => {
    return (
      <div>

      <Navbar/>

       <Profile>
          
               <ProfilePic>
                  <img src="https://www.w3schools.com/howto/img_avatar.png" width="80px" />

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
                <Skills>
                    my skill:
                    <span>skill1</span>
                    <span>skill2</span>
                    <span>skill3</span>
                </Skills>
                
        </Profile>
      </div>
    );
}
  
const Navbar = () => {
    return (
      <NavbarStyles>
        <section className='nav-logo'>
          <span>Starter Application</span>
        </section>
        <section className='nav-links'>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li className="blog-btn">Blog</li>
          </ul>
        </section>
      </NavbarStyles>
    )
  }
  
  export default DeveloperDashboard;