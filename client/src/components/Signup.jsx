import "./Signup.css";

const Signup = () => {
  return (
    <div className="container-signup">
      <div className="form-box">
      <h1 className="form-sign-close">X</h1>
      <form className="form-signup-h1">
        
        <h2 className='signup-title'> Starter Business Sign-up </h2>
        <ul className='signup-list'>
          <li>
            <label htmlFor="username">Email Address</label>
          </li>
          <li>      
            <input type="text" id="email address" required />
          </li> 
          <li> 
            <label htmlFor="password">Password</label>
          </li>
          <li>      
            <input type="password" id="password" required />
          </li>
          <li> 
            <label htmlFor="re-password">Retype Password</label>
          </li>
          <li>      
            <input type="password" id="re-password" required />
          </li>
        </ul>
        <div className='rules-errors'> <span> Email, Username or Password rules and errors. . . </span></div>
          <div className="Signup-btnHolder">
            <button className='signup-btn'>Sign Up</button>
        
            {/* <div className='back-arrow'> <img src='#' alt='Back Arrow'></img>back </div> */}
          </div>
      </form>
      </div>
    </div>
                              
  )
}

      
// document.querySelector('.container-signup').addEventListener('click', open);
// function open(){
// document.querySelector('.container-signup').style.display ='flex'
// };
// document.querySelector('.form-sign-close').addEventListener('click', close);
// function close(){
// document.querySelector('.container-signup').style.display ='flex'
// };


export default Signup;