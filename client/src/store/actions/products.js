import * as actionTypes from './actionTypes';
import { setAlert } from './alerts';
import axios from 'axios';

export const addProduct = (
    {
        title = '',
        category = '',
        productType = '',
        description = '',
        imageLink = '',
        location = '',
        price = 0,
        paymentMethod = '',
        phoneNumber = '',
        email = '',
        status = ''
    } = {}
) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({
        title,
        category,
        productType,
        description,
        imageLink,
        location,
        price,
        paymentMethod,
        phoneNumber,
        email,
        status
    })

    try {
        const res = await axios.put('/api/profile/products', body, config);

        dispatch({
            type: actionTypes.ADD_PRODUCT,
            product: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: actionTypes.PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const removeProduct = id => async dispatch => {
    try {
        await axios.delete(`/api/profile/products/${id}`)

        dispatch({
            type: actionTypes.REMOVE_PRODUCT,
            payload: { id }
        });

        dispatch(setAlert('Post Removed', 'success'))
    } catch (err) {
        console.log(err);
        dispatch({
            type: actionTypes.PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const editProduct = (id, updates) => {
    return {
        type: actionTypes.EDIT_PRODUCT,
        id,
        updates
    }
}