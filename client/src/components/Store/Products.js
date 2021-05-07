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
        <div>
            <div>
                <div>
                    <h1>Store Page</h1>
                    <ul>{productList}</ul>
                </div>
            </div>

            <Route path={`${url}/:productId`}>
                <Product data={STORE_ITEMS} />
            </Route>
            <Route exact path={url}>
                <p>Please select a product.</p>
            </Route>
        </div>
    );

}

export default Products;