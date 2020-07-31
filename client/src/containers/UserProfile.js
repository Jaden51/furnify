import React, { Component } from 'react';
import ProductUpload from '../components/ProductUpload/ProductUpload';

class UserAccount extends Component {
    render() {
        return (
            <div>
                <h1>User Profile Page</h1>
                <ProductUpload />
            </div>
        )
    }
}

export default UserAccount;