import * as actionTypes from './actionTypes';

export const setTextFilter = (text = '') => {
    return {
        type: actionTypes.SET_TEXT_FILTER,
        text
    }
}

export const sortByDate = () => {
    return {
        type: actionTypes.SORT_BY_DATE
    }
}

export const sortByAmount = () => {
    return {
        type: actionTypes.SORT_BY_AMOUNT
    }
}

export const setStartDate = (startDate) => {
    return {
        type: actionTypes.SET_START_DATE,
        startDate
    }
}

export const setEndDate = (endDate) => {
    return {
        type: actionTypes.SET_END_DATE,
        endDate
    }
}