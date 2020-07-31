import React, { Component } from 'react';
import styled from 'styled-components';

import about from '../assets/about.jpg';

class About extends Component {
    render() {
        return (
            <StyledAbout>
                <div className='img'></div>
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
            </StyledAbout>
        )
    }
}

export default About;

const StyledAbout = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    width: 100vw;
    margin: 5vh 0;

    .img {
        margin: 2vh 10vw 4vh 10vw;
        height: 70vh;
        width: 80vw;
        background-image: url(${about});
        background-size: cover;
        background-position: center;
        -webkit-animation-duration: 2.5s;
        animation: fadeIn 2.5s ease-out;
        -webkit-animation-fill-mode: ease-out;
      }

    .about-text {
        margin: 0 10vw;
        p {
            margin: 0 0 1rem 0;
            font-size: 1rem;
        }
        h2 {
            margin: 0;
            font-size: 1.6rem;
            font-weight: 400;
            }
      }
`;