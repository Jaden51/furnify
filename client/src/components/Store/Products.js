import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import STORE_ITEMS from '../../data/storeItems';
import Product from './Product';

const Products = () => {
    const { url } = useRouteMatch();

    const productList = STORE_ITEMS.map(product => {
        return (
            <li key={product.id}>
                <Link to={`${url}/${product.id}`}>{product.title}</Link>
            </li>
        )
    })

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <ul>{productList}</ul>
                </div>
                <Route path={`${url}/:productId`}>
                    <div className='col-8'>
                        <Product data={STORE_ITEMS} />
                    </div>
                </Route>
                <Route exact path={url}>
                    <p>Please select a product.</p>
                </Route>
            </div>
        </div>
    );

}

export default Products;