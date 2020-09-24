import React from 'react';
import Header from '../../components/Header/Header';
import home from '../../components/Images/Image/background.png';
import BookingImage from '../BookingImage/BookingImage';
import Layout from '../Layout/Layout';


import './Home.css'


const Home = () => {
 
    return (
        <div className="home">
            
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${home})` }} className="home">
                    <Layout></Layout>
                <div className="siteName">
                    <BookingImage></BookingImage>
                </div>
            </div>
            
        </div>
    );
};

export default Home;