import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

function CurrentUser() {
  const [result, setResult] = useState([]);
  const authToken =
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdDIiLCJleHAiOjE2NjE1MDM4OTV9.1Gc33wCoQJl652ezULI4YWC7Qg4J13oGIl_bEMyQ5HET8Q2z-7RfW5x1zigao6XQIvH28yttMoCM3GcbFy4r9w";
  useEffect(() => {
    axios({
      url: "https://localhost:7290/api/User/profile",
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${authToken}`,
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

export default CurrentUser;
