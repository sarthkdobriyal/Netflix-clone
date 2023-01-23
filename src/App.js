import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';


import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from "./features/userSlice"


function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();


  useEffect(() => {
    //listens to all auth state change
    const unsubscribe = onAuthStateChanged(auth,(user) => {
        if(user){
          //logged in
          console.log(user);
          dispatch(login({
            uid: user.uid,
            email: user.email
          }))
        }else{
          //logged out
          dispatch(logout);
        }
    })
    return unsubscribe;
  }, [])


  return (
    <div className="app">

      {
        !user ? (
          <LoginScreen />
        ) :
        (
          <Router>
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Router>
        )
      }
        

        
    </div>
  );
}

export default App;
