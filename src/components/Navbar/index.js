import React, {useState} from 'react';
import '../../assets/css/navbar.scss';
import {logo} from '../../assets/images/images';

const Navbar = () => {
    const [isActive, setActive] = useState(false);

    const start_page = () => {
        setActive(true);
    }

    return (
        <nav id="navbar" onLoad={start_page}>
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
