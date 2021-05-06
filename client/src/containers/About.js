import React, { Component } from 'react';
//import about from '../assets/about.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <img className='img' alt="tempimg"></img>
                <div className='about-text'>
                    <h1>About Us</h1>
                    <p>
                        We are an online store which allows consumers to sell there old furniture. We take that old furniture, refurbish
                        it and than sell it.
                    </p>
                    <p>
                        We are currently a small team based in Newmarket, Ontario.
                        Please feel free to contact us about anything. We want to hear from you weather it be feedback, a feature you wish to be added,
                        a business who wants to work with us or a customer with furniture to sell!
                    </p>
                </div>
            </div>
        )
    }
}

export default About;