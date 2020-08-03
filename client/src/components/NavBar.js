import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import setAuthToken from '../utils/setAuthToken';
import * as actions from '../store/actions/index';

import Home from '../containers/Home';
import About from '../containers/About';
import Store from '../containers/Store';
import UserProfile from '../containers/UserProfile';
import Contact from '../containers/Contact';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}
class NavBar extends Component {
    componentDidMount() {
        this.props.dispatch(actions.loadUser())
    }

    render() {
        return (
            <div>
                <StyledNavBar>
                    <div>
                        <h3 className='navBar'><Link className='link' to='/'>Home</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/about'>About</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/store'>Store</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/contact'>Contact</Link></h3>
                        <h3 className='navBar'><Link className='link' to='/account'>Profile</Link></h3>
                    </div>
                </StyledNavBar>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/store' exact component={Store} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/account' exact component={UserProfile} />
                    <Route path='/signup' exact component={SignUp} />
                    <Route path='/login' exact component={Login} />
                </Switch>
            </div>
        )
    }
}

export default connect()(NavBar);

const StyledNavBar = styled.div`
    .navBar {
        font-family: 'Economica', sans-serif;
        display: inline-block;
        margin: 10px;
    }

    .link {
        text-decoration: none;
        font-size: 20px;
        color: #008CBA;
    }

    text-align: center;
`;