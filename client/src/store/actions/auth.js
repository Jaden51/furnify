import * as actionTypes from './actionTypes';
import { setAlert } from './alerts';
import axios from 'axios';

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password })
    console.log(body)

    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: actionTypes.REGISTER_SUCCESS,
            payload: res.data
        })
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