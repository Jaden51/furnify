import React, { Component } from 'react';
import { connect } from 'react-redux';

class Orders extends Component {
    render() {
        const { profile } = this.props.profile;

        return (
            <div>
                <h4>Orders Page</h4>
                {profile.orders.length === 0 ? (
                    <div>
                        <p>You currently have no ordesr</p>
                    </div>
                ) : (
                        <div>Display orders here</div>
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

export default connect(mapStateToProps)(Orders);