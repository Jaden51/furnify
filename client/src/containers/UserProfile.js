import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../store/actions/index';

import ProfileForm from '../components/Profile/ProfileForm';
import Spinner from '../assets/Spinner-1s-200px.gif';

class UserProfile extends Component {
    componentDidMount() {
        this.props.dispatch(actions.getCurrentProfile());
    }

    render() {
        const { auth, profile } = this.props

        return (
            <div>
                <h1>User Profile Page</h1>
                {(profile.profile === null || auth.user === null) ? (
                    <img src={Spinner} alt='spinner'></img>
                ) : (
                        <StyledUserProfile>
                            <div>
                                <h3>{auth.user.name}</h3>
                            </div>
                            <div className='container'>
                                <ProfileForm />
                            </div>
                        </StyledUserProfile>
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(UserProfile);

const StyledUserProfile = styled.div`
    .container {
        display:flex; 
        flex-direction: row;
    }
`;