import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ data }) => {
    const { productId } = useParams();
    const product = data.find(p => p.id === productId);

    let productData;

    if (product) {
        productData = (
            <div className='card' style={{ width: '25rem' }}>
                <img alt='temp img' src={product.image} className='card-img-top' width='40%' height='40%'></img>
                <div className='card-body'>
                    <h4 className='card-title'>{product.title}</h4>
                    <h6 className='card-title'>{product.price}</h6>
                    <p className='card-text'>{product.description}</p>
                    <h6 className='card-title'>{product.status}</h6>
                </div>
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