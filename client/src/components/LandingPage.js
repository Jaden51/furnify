import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

class LandingPage extends Component {
    render() {
        const { isAuthenticated, loading } = this.props.auth;

        return (
            <StyledLandingPage>
                {!loading && !isAuthenticated ? (
                    <div>
                        <div className='block'>
                            <h1>Furniture Refurbishing Store</h1>
                            <h2>We buy, refurbish and resell your furniture.</h2>
                            <Link to={{ pathname: "/signup" }}><Button>SignUp</Button></Link>
                            <Link to={{ pathname: "/login" }}><Button>SignIn</Button></Link>
                        </div>
                    </div>
                ) : (
                        <div>
                            <div className='block'>
                                <h1>Furniture Refurbishing Store</h1>
                                <h2>We buy, refurbish and resell your furniture.</h2>
                            </div>
                        </div>
                    )

                }
            </StyledLandingPage>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(LandingPage);

const StyledLandingPage = styled.div`
    font-family: 'Roboto Condensed', sans-serif;

    .block {
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