import * as actionTypes from './actionTypes';

export const addProduct = (
    {
        title = '',
        category = '',
        productType = '',
        description = '',
        imageLink = '',
    } = {}
) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        product: {
            title,
            category,
            productType,
            description,
            imageLink,
        }
    }
}

export const removeProduct = ({ id } = {}) => {
    return {
        type: actionTypes.REMOVE_PRODCUT,
        id
    }
}

export const editProduct = (id, updates) => {
    return {
        type: actionTypes.EDIT_PRODUCT,
        id, 
        updates
    }
}