import React from 'react'
import "./SignUp.css"

function SignUp() {

    const register = (e) => {
        e.preventDefault();

    }

    const signin = (e) => {
        e.preventDefault();
    }




  return (
    <div className='signUp'>
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type="submit" onClick={signin}>Sign In</button>
            <h4> <span className='signUp__gray'>New to Netflix? </span>  <span className='signUp__link' onClick={register}>Sign Up Now</span></h4>
        </form>

    </div>
  )
}

export default SignUp