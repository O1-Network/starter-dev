import "./SignupForm.css";

const Signup = () => {
  return (
    <div className="container-signup">
      <div className="form-box">
      <form className="form-signup">
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
            <label htmlFor="password">Retype Password</label>
          </li>
          <li>      
            <input type="password" id="re-password" required />
          </li>
        </ul>
        <div className='rules-errors'> Email, Username or Password rules and errors. . </div>
        <button className='signup-btn'>Sign Up</button>
        
        <div className='back-arrow'> <img src='#' alt='Back Arrow'></img>back </div>

      </form>
      </div>
    </div>
    
  )
}

export default Signup;