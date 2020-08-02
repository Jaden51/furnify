import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_ALERT:
            return [
                ...state,
                action.alert
            ]
        case actionTypes.REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.id)
        default:
            return state
    }
}

export default reducer;