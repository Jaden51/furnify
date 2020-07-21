import React, { Component } from 'react';
import FurnitureUpload from '../components/FurnitureUpload';

class UserAccount extends Component {
    render() {
        return (
            <div>
                <h1>User Profile Page</h1>
                <FurnitureUpload />
            </div>
        )
    }
}

export default UserAccount;