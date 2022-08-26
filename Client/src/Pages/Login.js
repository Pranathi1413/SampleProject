import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const onLogin = (username, password) => {
  axios({
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
    // Handle the response from backend here
    .then((res) => {
      console.log(res.data);
    })

    // Catch errors if any
    .catch((err) => {
      console.log(err);
    });
};

function Login() {
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
          onClick={() => {
            onLogin(username, password);
            navigate("/user");
          }}
        >
          {" "}
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
