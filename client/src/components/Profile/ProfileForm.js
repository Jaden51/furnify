import React, { Component } from 'react';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            view: null
        }
    }

    handleClick = i => {
        this.setState({ view: i }, () => {
            this.props.toUserProfile(this.state.view);
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this, 3)} className='btn btn-outline-primary'>Products</button>
                <button onClick={this.handleClick.bind(this, 0)} className='btn btn-outline-primary'>Messages</button>
                <button onClick={this.handleClick.bind(this, 1)} className='btn btn-outline-primary'>Favourites</button>
                <button onClick={this.handleClick.bind(this, 2)} className='btn btn-outline-primary'>Orders</button>
            </div>
        )
    }
}



export default ProfileForm;