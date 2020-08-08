import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

class ProfileForm extends Component {
    state = {
        products: true,
        messages: false,
        favourites: false,
        orders: false
    }

    toProducts = () => {
        this.setState({
            products: true
        })
    }

    render() {
        return (
            <Formik>
                <Form>
                    <Link to="/profile/products">
                        <button>
                            <span>Products</span>
                        </button>
                    </Link><br />
                    <Link to="/profile/messages">
                        <button>
                            <span>Messages</span>
                        </button>
                    </Link><br />
                    <Link to="/profile/favourites">
                        <button>
                            <span>Favourites</span>
                        </button>
                    </Link><br />
                    <Link to="/profile/orders">
                        <button>
                            <span>Orders</span>
                        </button>
                    </Link><br />
                </Form>
            </Formik>
        )
    }
}

export default ProfileForm;