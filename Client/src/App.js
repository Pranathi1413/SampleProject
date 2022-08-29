import React from 'react';
import { useState } from 'react';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App(props) {

  const [signinButtonState , setSigninButtonState] = useState("false");
  console.log(props)
  return (
    
      <div className="App">
        <div className='loginRegisterBox'>
          <div className='welcomeBox'>
            <h1> Welcome to users page !</h1>
            <button onClick={ (e) => {
              e.preventDefault();
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
