import * as actions from './actionTypes';
import axios from 'axios';
import { setAlert } from './alerts';

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('api/profile/me');
        dispatch({
            type: actions.GET_PROFILE,
            profile: res.data
        });
    } catch (err) {
        dispatch({
            type: actions.PROFILE_ERROR,
            error: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const createProfile = () => async dispatch => {
    try {
        const profileStarter = {
            time: "",
            location: "",
            phoneNumber: "",
            productsSold: 0,
            productsOrdered: 0,
            products: [],
            reviews: [],
            orders: [],
            messages: [],
            favourites: []
        };

        const res = await axios.post('api/profile', profileStarter);

        dispatch({
            type: actions.GET_PROFILE,
            profile: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: actions.PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
