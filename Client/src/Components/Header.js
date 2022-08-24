import '../App.css'
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';

function Header() {
    return(
        <div >
            {/* <div className='userPortal'>Users Portal</div>
            <div className='allUsers' > All Users</div>
            <div className='myProfile'>My Profile</div> */}

            <nav className='header'>
                <a href='/user'>Users Page</a>
                <a className='allUsers' href='/allUsers'> All Users </a>
                <a className='myProfile' href='/user'> My Profile</a>
            </nav>
        </div>
    );
}

export default Header;
