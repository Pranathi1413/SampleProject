import '../App.css'
import React from 'react';
import {NavLink} from 'react-router-dom'

function Header() {
    return(
        <div >
            {/* <div className='userPortal'>Users Portal</div>
            <div className='allUsers' > All Users</div>
            <div className='myProfile'>My Profile</div> */}

            <nav className='header'>
                <NavLink to='/user'>Users Page</NavLink>
                <NavLink className='allUsers' to='/allUsers'> All Users </NavLink>
                <NavLink className='myProfile' to='/user'> My Profile</NavLink>
            </nav>
        </div>
    );
}

export default Header;
