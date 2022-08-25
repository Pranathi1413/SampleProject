import React from "react";
import "../App.css";

function ProfileCard(props) {
  return (
    <div className="profileCard">
      <h2> {props.props.username} </h2>
    </div>
  );
}

export default ProfileCard;
