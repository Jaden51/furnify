import * as actionTypes from '../actions/actionTypes';

const INTIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

const reducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            localStorage.setItem('token', action.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case actionTypes.REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;