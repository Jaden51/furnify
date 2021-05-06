import React, { Component } from 'react';

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
            <div>
                <div>
                    <img /*src={SLIDE_IMAGES[imageIndex]}*/ alt={SLIDE_IMAGES[imageIndex]} className='img'></img>
                </div>
                <button className="prev arrow" onClick={this.prevImage}>&#10094;</button>
                <button className="next arrow" onClick={this.nextImage}>&#10095;</button>
            </div>

        )
    }
}

export default ImageCarousel;