import React, { Component } from 'react';
import styled from 'styled-components';

import ImageCarousel from '../components/ImageCarousel';
import LandingPage from '../components/LandingPage';

class Home extends Component {
    render() {
        return (
            <StyledHome>
                <LandingPage />
                <ImageCarousel />
            </StyledHome>
        );
    }
}

export default Home;

const StyledHome = styled.div`
    width: 100vw;
    margin: 5vh 0;
`;