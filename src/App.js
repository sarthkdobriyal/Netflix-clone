import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {

  const user = null;


  return (
    <div className="app">

      {
        !user ? (
          <LoginScreen />
        ) :
        (
          <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Router>
        )
      }
        

        
    </div>
  );
}

export default App;
