import React from 'react';
import '../../assets/css/navbar.scss';
import {logo} from '../../assets/images/images';

const Navbar = () => {
    return (
        <nav id="navbar">
            <div id='nav_logo'>
                <img src={logo} alt="Logo here" id="logo"></img>
            </div>
            <div id='nav_links'>
                <p>Link</p>
                <p>Link</p>
            </div>
        </nav>
    );
};

export default Navbar;
