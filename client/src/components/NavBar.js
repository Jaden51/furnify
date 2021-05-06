import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import setAuthToken from '../utils/setAuthToken';
import * as actions from '../store/actions/index';
import PrivateRoute from './PrivateRoute';

import Home from '../containers/Home';
import About from '../containers/About';
import Store from '../containers/Store';
import UserProfile from '../containers/UserProfile';
import Contact from '../containers/Contact';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import ProductUpload from './ProductUpload/ProductUpload';

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
            <div>
                {!loading && isAuthenticated ? (
                    // Is authenticated
                    <div>
                        <h3 className='navBar'><Link className='link' to='/'>Home</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/about'>About</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/store'>Store</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/contact'>Contact</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/post'>Post Product</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/profile'>Profile</Link></h3>
                        <h3 className='navBar link logout' onClick={this.logout}>Logout</h3>
                    </div>
                ) : (
                    // Not authenticated
                    <div>
                        <h3 className='navBar'><Link className='link' to='/'>Home</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/about'>About</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/store'>Store</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/contact'>Contact</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/signup'>Sign Up</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/login'>Login</Link></h3>
                    </div>
                )
                }

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/store' exact component={Store} />
                    <Route path='/contact' exact component={Contact} />
                    <PrivateRoute path='/profile' exact component={UserProfile} />
                    <PrivateRoute path='/post' exact component={ProductUpload} />
                    <Route path='/signup' exact component={SignUp} />
                    <Route path='/login' exact component={Login} />
                </Switch>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(NavBar);