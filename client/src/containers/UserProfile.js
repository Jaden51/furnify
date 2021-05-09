import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import ProfileForm from '../components/Profile/ProfileForm';
import Products from '../components/Profile/Products';
import Messages from '../components/Profile/Messages';
import Orders from '../components/Profile/Orders';
import Favourites from '../components/Profile/Favourites';

class UserProfile extends Component {
    state = { view: 3 }

    componentDidMount() {
        this.props.dispatch(actions.getCurrentProfile());
    }

    getView = view => {
        this.setState({ view })
    }

    render() {

        const { auth, profile } = this.props;
        const { view } = this.state;

        let profileViewSelect = view;
        let profileView;
        switch (profileViewSelect) {
            case 0:
                profileView = <Messages />
                break;
            case 1:
                profileView = <Favourites />
                break;
            case 2:
                profileView = <Orders />
                break;
            default:
                profileView = <Products />
        }

        return (
            <div className='container'>
                {(profile.profile === null || auth.user === null) ? (
                    <div className='d-flex justify-content-center'>
                        <div role='status' className='spinner-border text-primary'>
                            <span className='visually-hidden'>Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                            <h3>Hello, {auth.user.name}!</h3>
                        </div>
                        <div className='container'>
                            <ProfileForm toUserProfile={this.getView} />
                            {profileView}
                        </div>
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