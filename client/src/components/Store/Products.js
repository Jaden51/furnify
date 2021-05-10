import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import STORE_ITEMS from '../../data/storeItems';
import Product from './Product';

const Products = () => {
    const { url } = useRouteMatch();

    const productList = STORE_ITEMS.map(product => {
        return (
            <Link key={product.id} style={{ textDecoration: 'none' }} to={`${url}/${product.id}`}>
                <li className='list-group-item list-group-item-action'>
                    {product.title}
                </li>
            </Link >
        )
    })

    return (
        <div className='container'>
            <div className='row'>
                <div className='col list-group'>
                    <ul>{productList}</ul>
                </div>
                <Route path={`${url}/:productId`}>
                    <div className='col'>
                        <Product data={STORE_ITEMS} />
                    </div>
                </Route>
                <Route exact path={url}>
                    <p className='text-center'>Please select a product.</p>
                </Route>
            </div>
        </div>
    );

}

export default Products;