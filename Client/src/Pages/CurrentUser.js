import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import {connect} from 'react-redux'


function CurrentUser(props) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios({
      url: "https://localhost:7290/api/User/profile",
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${props.jwt}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="currentUserCard">
      <h2> {result.username}</h2>
      {/* <h3> dummy city</h3>
      <h3> dummy state</h3>
      <h3> dummy pincode</h3> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jwt: state.userJwt
  }
}

export default connect(mapStateToProps)(CurrentUser);
