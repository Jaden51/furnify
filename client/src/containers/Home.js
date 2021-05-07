import React, { Component } from 'react';

import ImageCarousel from '../components/ImageCarousel';
import LandingPage from '../components/LandingPage';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <LandingPage />
                <ImageCarousel />
            </div>
        );
    }
}

export default Home;