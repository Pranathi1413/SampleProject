import React from 'react';
import "../App.css"

function ProfileCard (props){

    return (
        <div className="profileCard">
            {console.log(props)}
            <h2> {props.props.first_name} </h2>
            <h3> {props.props.city}</h3>
            <h3> {props.props.state}</h3>
            <h3> {props.props.postcode}</h3>
            

        </div>
    );
}

export default ProfileCard;