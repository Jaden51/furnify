import * as actionTypes from './actionTypes';

export const setAlert = (msg, alertType, id) => {
    return {
        type: actionTypes.SET_ALERT,
        alert: {
            msg, alertType, id
        }
    }
}

export const removeAlert = id => {
    return {
        type: actionTypes.REMOVE_ALERT,
        id
    }
}