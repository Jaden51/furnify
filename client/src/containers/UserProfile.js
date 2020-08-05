import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import DashBoard from '../components/Profile/Dashbaord';

class UserProfile extends Component {
    componentDidMount() {
        this.props.dispatch(actions.getCurrentProfile());
    }

    render() {
        return (
            <div>
                <h1>User Profile Page</h1>
                <DashBoard />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(UserProfile);