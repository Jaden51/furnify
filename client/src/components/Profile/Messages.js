import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component {
    render() {
        const { profile } = this.props.profile;

        return (
            <div>
                <h4>Messages Page</h4>
                {profile.messages.length === 0 ? (
                    <div>
                        <p>You currently have no messages</p>
                    </div>
                ) : (
                        <div>Display messages here</div>
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

export default connect(mapStateToProps)(Products);