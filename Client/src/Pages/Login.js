
import React from 'react';
import '../App.css'
import {useNavigate} from 'react-router-dom';

function Login(){
    const naviagte = useNavigate();
 return (
    <div className="login">
        <h1>Login</h1>
        <form className='loginForm'>
            <div className='inputField'>
                <label>username: </label>
                <input type={"text"} placeholder="username"></input>
            </div>
            {/* <div className='inputField'>
                <label>email id: </label>
                <input type={"text"} placeholder="email id"></input>
            </div> */}
            <div className='inputField'>
                <label>password: </label>
                <input type={"password"} placeholder="password"></input>             
            </div>
            <button className='loginButton' onClick={() => {
                naviagte('/user');
            }}> login</button>
        </form>
    </div>
 );  
}

export default Login;