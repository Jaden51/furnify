import React, { Component } from 'react';
import STORE_ITEMS from '../data/storeItems';
import { connect } from 'react-redux';
import Items from './Items';

class StoreDisplay extends Component {

    render() {
        const { products } = this.props;

        return (
                <div>
                    <div>
                        {
                            STORE_ITEMS.map(STORE_ITEM => {
                                return (
                                    <Items key={STORE_ITEM.id} storeItem={STORE_ITEM} />
                                );
                            })
                        }
                        {
                            products.map(product => {
                                return (
                                    <img
                                        className='img'
                                        src={product.imageLink}
                                        alt='temp'>
                                    </img>
                                )
                            })
                        }
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(StoreDisplay);