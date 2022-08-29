import React, { useEffect, useState } from "react";
import "../App.css";
import ProfileCard from "../Components/ProfileCard";
// import dummydata from "../data";
import axios from "axios";
import {connect} from 'react-redux'

function Allusers(props) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios({
      url: "https://localhost:7290/api/User",
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
    <div className="allUsersBox">
      {result.map((user) => {
        return <ProfileCard key={user.username} props={user} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jwt: state.userJwt
  }
}

export default connect(mapStateToProps)(Allusers);
