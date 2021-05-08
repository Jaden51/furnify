import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import setAuthToken from '../utils/setAuthToken';
import * as actions from '../store/actions/index';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

class NavBar extends Component {
    componentDidMount() {
        this.props.dispatch(actions.loadUser())
    }

    logout = () => {
        this.props.dispatch(actions.logout())
    }

    render() {
        const { isAuthenticated, loading } = this.props.auth;

        return (
            <nav className='navbar navbar-expand-md bg-light'>
                {!loading && isAuthenticated ? (
                    // Is authenticated
                    <div className='navbar-collapse collapse justify-content-center order-2' id='collapsingNavbar'>
                        <ul className='navbar-nav'>
                            <h3 className='nav-item'><Link className='nav-link' to='/'>Home</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/about'>About</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/store'>Store</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/contact'>Contact</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/post'>Post Furniture</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/profile'>Profile</Link></h3>
                            <h3 className='nav-item' onClick={this.logout}><Link className='nav-link' to='/profile'>Logout</Link></h3>
                        </ul>
                    </div>
                ) : (
                    // Not authenticated
                    <div className='navbar-collapse collapse justify-content-center order-2' id='collapsingNavbar'>
                        <ul className='navbar-nav'>
                            <h3 className='nav-item'><Link className='nav-link' to='/'>Home</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/about'>About</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/store'>Store</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/contact'>Contact</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/signup'>Sign Up</Link></h3>
                            <h3 className='nav-item'><Link className='nav-link' to='/login'>Login</Link></h3>
                        </ul>
                    </div>
                )
                }
            </nav >
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(NavBar);