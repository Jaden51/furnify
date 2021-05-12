import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/Home/ImageCarousel';
import LandingPage from '../components/Home/LandingPage';
import About from './About';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <LandingPage />
                <ImageCarousel />
                <About />
                <div className='container' style={{marginBottom: '7rem'}}>
                    <h2 className='h1-responsive font-weight-bold text-center my-4'>Visit our store</h2>
                    <div className='row'>
                        <div className='col text-center'>
                            <button className='btn btn-outline-secondary' style={{ marginRight: '1rem', marginBottom: '1rem' }}>
                                <Link className='nav-link' to={{ pathname: "/store" }}>View Store</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>
        );
    }
}

export default Home;