import React, { Component } from 'react';
import StoreDisplay from '../components/StoreDisplay';

class Store extends Component {
    render() {
        return (
            <div>
                <h1>Store Page</h1>
                <StoreDisplay />
            </div>
        )
    }
}

export default Store;