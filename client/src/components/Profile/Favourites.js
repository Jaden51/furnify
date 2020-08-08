import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favourites extends Component {
    render() {
        return (
            <div>Favourites page</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Favourites);