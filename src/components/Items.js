import React, { Component } from 'react';
import STORE_ITEMS from '../data/storeItems';
import styled from 'styled-components';

class Item extends Component {
    render() {
        const { image, price } = this.props.storeItem;

        return (
            <div className='block'>
                <img className='img' src={image} alt='store-items'></img>
                <p>{price}</p>
            </div>
        )
    }
}

class Items extends Component {
    render() {
        return (
            <StyledItems>
                <div>
                    <div>
                        {
                            STORE_ITEMS.map(STORE_ITEM => {
                                return (
                                    <Item key={STORE_ITEM.id} storeItem={STORE_ITEM} />
                                );
                            })
                        }
                    </div>
                </div>
            </StyledItems>
        )
    }
}

export default Items;

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