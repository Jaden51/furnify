import React, { Component } from 'react';
import Items from '../components/Items';

class Store extends Component {
    render() {
        return (
            <div>
                <h1>Store Page</h1>
                <Items />
            </div>
        )
    }
}

export default Store;