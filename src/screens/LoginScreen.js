import React, { useState } from 'react'
import SignUp from '../components/SignUp';
import "./LoginScreen.css"

function LoginScreen() {

    const [signIn , setSignIn] = useState(false);




  return (
    <div className='loginScreen'>
        <div class="loginScreen__backround">
            <img className='loginScreen__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />

            <button className='loginScreen__button' onClick={() => setSignIn(true)}>Sign In</button>
            
            {/* for adding that black effect on the background image (look in css) */}
            <div className="loginScreen__gradient" />
                
            <div className="loginScreen__body">
                { 
                signIn ? 

                <SignUp /> :
                
                (<>
                    <h1>Unlimited Films, TV Programmes and much more.</h1>
                    <h2>Watch Anywhere. Cancel at any time.</h2>
                    <h3>
                        Ready to watch? Enter your email to create or restart your membership
                    </h3>
                    <div class="loginScreen__input">
                        <form>
                            <input type="email" placeholder='Email address' />
                            <button className="loginScreen__getStarted" onClick={() => setSignIn(true)}>GET STARTED</button>
                        </form>
                    </div>
                </>)
                
                }
            </div>

        </div>
    </div>
  )
}

export default LoginScreen