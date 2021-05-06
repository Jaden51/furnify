import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LandingPage extends Component {
    render() {
        const { isAuthenticated, loading } = this.props.auth;

        return (
            <div>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(LandingPage);