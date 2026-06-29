import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup, login } from '../../config/firebase'

const Login = () => {

  const [currState, setCurrState] = useState('Sign up')
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
      event.preventDefault();
      if(currState === "Sign up"){
        signup(userName, email, password);
      }
      else{
        login(email,password);
      }
  }

  return (
    <div className="login">
      <img src={assets.logo_big} alt="Chat App Logo" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState === 'Sign up' ? 'Sign Up' : 'Log In'}</h2>
        {currState === 'Sign up' ? (
          <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" placeholder="username" className="form-input" required />
        ): null}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="email" className="form-input" required />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="password" className="form-input" required />
        <button type="submit" className="login-button">{currState === 'Sign up' ? 'Sign Up' : 'Log In'}</button>
        <div className="login-term">
            <input type="checkbox" id="terms" required />
            <p><label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</label></p>
        </div>
        <div className="login-forgot">
          {
            currState === 'Sign up'
            ? (
              <p className="login-toggle">Already have an account? <span onClick={() => setCurrState('Login')}>Log In</span></p>
            )
            : (
              <p className="login-toggle">Don't have an account? <span onClick={() => setCurrState('Sign up')}>Sign Up</span></p>
            )
          }
        </div>
      </form>
    </div>
  )
}

export default Login