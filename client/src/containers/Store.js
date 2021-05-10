import React from 'react';
import Products from '../components/Store/Products';

const Store = () => {

    return (
        <div className='container'>
            <h1 className='h1-responsive font-weight-bold text-center my-4'>Store Page</h1>
            <Products />
        </div>
    )
}

export default Store;