import React, { useEffect, useState } from 'react';
import '../../assets/css/home.scss';
import {logo} from '../../assets/images/images';

const Home = () => {
    const [isActive, setActive] = useState(false);

    const start_up = () => {
        setActive(true);
    }

    return (
        <div id="home">
            <img src={logo} onLoad={start_up} alt="logo image" className={isActive ? 'start_up':'dormant'}></img>
        </div>
    );
}

export default Home;
