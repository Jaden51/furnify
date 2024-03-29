import * as actionTypes from './actionTypes';
import { setAlert } from './alerts';
import { createProfile, getCurrentProfile } from './profile';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password })

    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: actionTypes.REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
        dispatch(createProfile());
        dispatch(getCurrentProfile());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: actionTypes.REGISTER_FAIL
        })
    }
}

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: actionTypes.USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: actionTypes.AUTH_ERROR
        })
    }
}

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
        dispatch(getCurrentProfile());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: actionTypes.LOGIN_FAIL
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: actionTypes.LOGOUT,
    })
    dispatch({
        type: actionTypes.CLEAR_PROFILE
    })
}