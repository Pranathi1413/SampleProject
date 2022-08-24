import React from 'react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Header from './Components/Header';
import ProfileCard from './Components/ProfileCard';

function App() {

  const [signinButtonState , setSigninButtonState] = useState("false");
  
  return (
    
      <div className="App">
        <div className='loginRegisterBox'>
          <div className='welcomeBox'>
            <h1> Welcome to users page !</h1>
            <button onClick={ () => {
              setSigninButtonState(!signinButtonState);
              console.log(signinButtonState)
            }}> {signinButtonState ? "Don't have an account? Signup" : "Login"}</button>
          </div>
          <div className='formBox'>
            {signinButtonState ? <Login></Login> : <Register></Register> }
          </div>
      </div>
      </div>
    
    
  );
}

export default App;
