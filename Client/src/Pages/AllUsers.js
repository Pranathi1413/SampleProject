import React from "react";
import '../App.css'
import ProfileCard from "../Components/ProfileCard";
import dummydata from "../data";
function Allusers(){

    return(
        <div className='allUsersBox'>
            
            {
                dummydata.map( (user) => {
                    return (
                        <ProfileCard props={user}/>
                    );
                })
            }
        </div>
    );


}


export default Allusers;