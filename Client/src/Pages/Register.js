import React from 'react';
import '../App.css'

function Register(){
 return (
    <div className="login">
        <h1>Register</h1>
        <form className='loginForm'>
            <div className='inputField'>
                <label>username: </label>
                <input type={"text"} placeholder="username"></input>
            </div>
            <div className='inputField'>
                <label>email id: </label>
                <input type={"text"} placeholder="email id"></input>
            </div>
            <div className='inputField'>
                <label>password: </label>
                <input type={"password"} placeholder="password"></input>             
            </div>
            <button className='registerButton' onClick={() => {
                alert("User registered sucessfully")
            }}>
                register
            </button>
        </form>
    </div>
 );  
}

export default Register;