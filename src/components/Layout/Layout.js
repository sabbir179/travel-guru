import React from 'react';

import Header from '../../components/Header/Header.js';
import home from '../../components/Images/Image/background.png';


import './Layout.css'


const Layout = () => {
    
    return (
        <div className="home">
            
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${home})` }} className="home">
            <Header></Header>
                <div>
                    <h1>Cox's bazar</h1>
                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className="btn-booking"> <span>Booking</span>   </button>
                </div>
                <div className="siteName">
                    
                </div>
            </div>
            
        </div>
    );
};

export default Layout;