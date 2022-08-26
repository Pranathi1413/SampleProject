import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const onRegister = (username, password) => {
  axios({
    // Endpoint to send files
    url: "https://localhost:7290/api/Auth/register",
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
      console.log(res);
    })

    // Catch errors if any
    .catch((err) => {
      console.log(err);
    });
};

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h1>Register</h1>
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
          className="registerButton"
          onClick={() => {
            onRegister(username, password);
          }}
        >
          register
        </button>
      </form>
    </div>
  );
}

export default Register;
