import React, { Component } from 'react';
import styled from 'styled-components';

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';

const SLIDE_IMAGES = [
    slider1,
    slider2,
    slider3
]

class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0
        };
    }

    nextImage = () => {
        this.setImage(this.state.imageIndex + 1);
    }

    prevImage = () => {
        this.setImage(this.state.imageIndex - 1);
    }

    setImage = (i) => {
        if (i > SLIDE_IMAGES.length - 1) {
            i = (i + SLIDE_IMAGES.length) % SLIDE_IMAGES.length;
        } else if (i < 0) {
            i = SLIDE_IMAGES.length - 1;
        }

        this.setState({ imageIndex: i });
    }

    render() {
        const { imageIndex } = this.state;

        return (
            <StyledImageCarousel>
                <div>
                    <div>
                        <img src={SLIDE_IMAGES[imageIndex]} alt='carousel' className='img'></img>
                    </div>
                    <button className="prev arrow" onClick={this.prevImage}>&#10094;</button>
                    <button className="next arrow" onClick={this.nextImage}>&#10095;</button>
                </div>
            </StyledImageCarousel>

        )
    }
}

export default ImageCarousel;

const StyledImageCarousel = styled.div`
    .arrow {
        cursor: pointer;
    }

    .prev, .next {
        margin: 0 10vw;
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }

    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
    }

    .img {
        margin: 2vh 10vw 4vh 10vw;
        height: 40vh;
        width: 40vw;
        background-size: cover;
        background-position: center;
        -webkit-animation-duration: 2.5s;
        animation: fadeIn 2.5s ease-out;
        -webkit-animation-fill-mode: ease-out;
      }
`;