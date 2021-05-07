import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ data }) => {
    const { productId } = useParams();
    const product = data.find(p => p.id === productId);

    let productData;

    if (product) {
        productData = (
            <div>
                <h3> {product.title} </h3>
                <figure className='figure'>
                    <img alt='temp img' src={product.image} className='figure-img img-thumbnail' width='40%' height='40%'></img>
                    <figcaption className='figure-caption'>{product.description}</figcaption>
                </figure>
                <p>{product.price}</p>
                <h4>{product.status}</h4>
            </div>
        )
    } else {
        productData = <h2> Sorry. Product doesn't exist</h2>
    }

    return (
        <div>
            <div>{productData}</div>
        </div>
    )
}

export default Product;