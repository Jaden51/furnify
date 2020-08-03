import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    console.log(Component)
    const { isAuthenticated, loading } = auth;
    return (
        <Route {...rest} render={props => (
            !isAuthenticated && !loading ?
                <Redirect to='/login' />
                : <Component {...props} />
        )} />
    )
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute);
