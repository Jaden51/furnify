import * as actionTypes from '../actions/actionTypes';

const INTIAL_STATE = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
}

const reducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_TEXT_FILTER:
            return {
                ...state,
                text: action.text
            }
        case actionTypes.SORT_BY_AMOUNT:
            return {
                ...state,
                sortBy: 'amount'
            }
        case actionTypes.SORT_BY_DATE:
            return {
                ...state,
                sortBy: 'date'
            };
        case actionTypes.SET_START_DATE:
            return {
                ...state,
                startDate: action.startDate
            };
        case actionTypes.SET_END_DATE:
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}

export default reducer;