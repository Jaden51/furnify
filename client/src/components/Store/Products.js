import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import STORE_ITEMS from '../../data/storeItems';

const Products = ({ match }) => {
    const { url } = useRouteMatch();

    const productList = productData.map(product => {
        return (
            <li key={product.id}>
                <Link to={`${url}/${product.id}`}>{product.name}</Link>
            </li>
        )
    })

    return (
        <div>
            <div>
                <div>
                    <h3>Products</h3>
                    <ul>{productList}</ul>
                </div>
            </div>

            <Route path={`${url}/:productId`}>
                <Product data={productData} />
            </Route>
            <Route exact path={url}>
                <p>Please select a product.</p>
            </Route>
        </div>
    );

}