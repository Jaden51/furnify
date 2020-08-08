import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component {
    render() {
        return (
            <div>Products page</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Products);