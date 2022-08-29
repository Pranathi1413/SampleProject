import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setJwt } from "../Actions/userActions";
import { connect  } from 'react-redux'

const onLogin = async (username, password, props) => {
  const res = await axios({
    // Endpoint to send files
    url: "https://localhost:7290/api/Auth/login",
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },

    // Attaching the form data
    data: {
      username: username,
      password: password,
    },
  })
    
  console.log(res.data);
  await props.setJwtDispatch(res.data);

    
};

function Login(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="loginForm">
        <div className="inputField">
          <label>username: </label>
          <input
            type={"text"}
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <div className="inputField">
          <label>password: </label>
          <input
            type={"password"}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="loginButton"
          onClick={async (e) => {
            e.preventDefault();
            await onLogin(username, password, props);
            console.log("after login", props)
            navigate("/user")
          }}
        >
          {" "}
          login
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jwt: state.userJwt
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    setJwtDispatch: (jwt) => dispatch(setJwt(jwt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
