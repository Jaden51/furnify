import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class LandingPage extends Component {

    logout = () => {
        this.props.dispatch(actions.logout())
    }

    render() {
        const { isAuthenticated, loading } = this.props.auth;

        return (
            <div>
                {!loading && !isAuthenticated ? (
                    <div>
                        <div>
                            <h4 className='h2-responsive font-weight-bold my-4'>Furnify test</h4>
                            <h1 className='h4-responsive font-weight-bold my-4'>We buy, refurbish and resell your furniture.</h1>
                            <div className='d-grid gap-2 d-md-block'>
                                <button className='btn btn-outline-secondary' style={{ marginRight: '1rem', marginBottom: '1rem' }}>
                                    <Link className='nav-link' to={{ pathname: "/signup" }}>Sign Up</Link>
                                </button>
                                <button className='btn btn-outline-secondary' style={{ marginRight: '1rem', marginBottom: '1rem' }}>
                                    <Link className='nav-link' to={{ pathname: "/login" }}>Sign In</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                            <h4 className='h4-responsive font-weight-bold my-4'>Furnify</h4>
                            <h1 className='h1-responsive font-weight-bold my-4'>We buy, refurbish and resell your furniture.</h1>
                            <button
                                className='btn btn-outline-secondary'
                                style={{ marginRight: '1rem', marginBottom: '1rem' }}
                                onClick={this.logout}>
                                <Link className='nav-link' to={{ pathname: "/login" }}>Logout</Link>
                            </button>
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