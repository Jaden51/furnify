import * as actionTypes from '../actions/actionTypes';

// const INTIAL_STATE = {
//     products: [{
//         id: '',
//         url: '',
//         category: '',
//         progress: 0
//     }],
// }

const INTIAL_STATE = [];

const reducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return [
                ...state,
                action.product
            ];
        case actionTypes.REMOVE_PRODCUT:
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case actionTypes.EDIT_PRODUCT:
            return state.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        ...action.updates
                    }
                } else {
                    return product;
                }
            })
        default:
            return state;
    }
}

export default reducer;