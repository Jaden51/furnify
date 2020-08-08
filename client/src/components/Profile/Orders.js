import React, { Component } from 'react';
import { connect } from 'react-redux';

class Orders extends Component {
    render() {
        return (
            <div>Orders page</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Orders);