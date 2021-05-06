import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import ProfileForm from '../components/Profile/ProfileForm';
import Spinner from '../assets/Spinner-1s-200px.gif';
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
            <div>
                <h1>User Profile Page</h1>
                {(profile.profile === null || auth.user === null) ? (
                    <img src={Spinner} alt='spinner'></img>
                ) : (
                    <div>
                        <div>
                            <h3>{auth.user.name}</h3>
                        </div>
                        <div className='container'>
                            <ProfileForm toUserProfile={this.getView} />
                            {profileView}
                        </div></div>
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