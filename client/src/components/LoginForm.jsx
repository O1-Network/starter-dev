import './LoginForm.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form">
          <h2 className='login-title'>Login</h2>
          <ul className='login-list'>
              <li>
                  <label className="login-label" htmlFor='login_email'>Email Address</label>
              </li>
              <li>
                  <input type="text" id="login_email"required />
              </li>
              <li>
                  <label className="login-label" htmlFor='login_password'>Password</label>
              </li>
              <li>
                  <input type="password" id="login_password" required />
              </li>
          </ul>
          <div className="login-label box-placeholder">Email, username, rules placeholder</div>
            <button className='login-btn'>Login</button>
            <a className ="forgot-password"href='#'>Forgot Password?</a>
        </form>
      </div>
    </div>
  );
}

export default Login;