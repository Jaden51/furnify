import * as actions from './actionTypes';
import axios from 'axios';
//import { setAlert } from './alerts';

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: actions.GET_PROFILE,
            profile: res.data
        })
    } catch (err) {
        dispatch({
            type: actions.PROFILE_ERROR,
            error: { msg: err.resonse.statusText, status: err.response.status }
        })
    }
}