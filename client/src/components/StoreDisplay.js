import React, { Component } from 'react';
import STORE_ITEMS from '../data/storeItems';
import { connect } from 'react-redux';
import Items from './Items';
import styled from 'styled-components';

class StoreDisplay extends Component {
    test = () => {
        console.log(1)
    }

    render() {
        const { products } = this.props;

        return (
            <StyledItems>
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
                    <button onClick={this.test}>Test</button>
                </div>
            </StyledItems>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(StoreDisplay);

const StyledItems = styled.div`
    .img {
        width: 200px;
        height: 200px;
    }

    .block {
        display: inline-block;
        margin: 10px;
    }
`;