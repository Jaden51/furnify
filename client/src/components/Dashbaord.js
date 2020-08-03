import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class Dashboard extends Component {
    componentDidMount() {
        this.props.dispatch(actions.getCurrentProfile());
    }

    render() {
        return (
            <div>Dashboard</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Dashboard);