import React, { Component } from 'react';
import { connect } from 'react-redux';

class Items extends Component {
    render() {
        const { image, price } = this.props.storeItem;

        return (
            <div className='block'>
                <div>
                    <img className='img' src={image} alt='store-items'></img>
                    <p>{price}</p>
                </div>
                <div>
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

export default connect(mapStateToProps)(Items);