import * as actions from '../actions/actionTypes';

const INTIAL_STATE = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

const reducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case actions.GET_PROFILE:
            return {
                ...state,
                profile: action.profile,
                loading: false
            }
        case actions.PROFILE_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actions.CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;