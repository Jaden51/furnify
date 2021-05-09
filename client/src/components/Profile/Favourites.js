import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favourites extends Component {
    render() {
        const { profile } = this.props.profile;

        return (
            <div>
                <h4>Favourites</h4>
                {profile.favourites.length === 0 ? (
                    <div>
                        <p>You currently have no favourites.</p>
                    </div>
                ) : (
                        <div>Display favourites here</div>
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

export default connect(mapStateToProps)(Favourites);