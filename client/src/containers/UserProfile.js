import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import DashBoard from '../components/Profile/Dashbaord';
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
                        <div>
                            <DashBoard />
                            <ProfileForm />
                        </div>
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