import React,{useRef} from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import "./SignUp.css"

function SignUp() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })

    }

    const signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((userCredential) => {
            // Signed in 
            console.log(userCredential.user);
          })
          .catch((error) => {
            alert(error.message);
          });
    }




  return (
    <div className='signUp'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='Password' />
            <button type="submit" onClick={signin}>Sign In</button>
            <h4> <span className='signUp__gray'>New to Netflix? </span>  <span className='signUp__link' onClick={register}>Sign Up Now</span></h4>
        </form>

    </div>
  )
}

export default SignUp