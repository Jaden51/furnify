import * as actionTypes from '../actions/actionTypes';

const INTIAL_STATE = {
    products: []
}

const reducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: [action.product, ...state.products]
            }
        case actionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
              };
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