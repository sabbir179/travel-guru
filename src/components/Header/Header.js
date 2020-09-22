import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../../components/Images/Image/Logo-2.png';

const Header = () => {
    return (
        <div >
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="btn-login" to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;