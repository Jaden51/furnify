import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import STATUS from '../../data/status';

import DetailsUpload from './DetailsUpload';
import ImageUpload from './ImageUpload';
import PaymentUpload from './PaymentUpload';
import ContactUpload from './ContactUpload';
import { Link } from 'react-router-dom';

class ProductUpload extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: {},
            fields: {
                title: '',
                category: 'Chair',
                productType: 'Non-Refurbished',
                description: '',
                imageLink: '',
                location: '',
                price: 0,
                paymentMethod: '',
                phoneNumber: 0,
                email: '',
                status: STATUS.review
            }
        }
    }

    getDetailsData = detailsData => {
        const { title, category, productType, description } = { ...detailsData }
        this.setState({
            fields: {
                ...this.state.fields,
                title, category, productType, description
            }
        })
    }

    getImageData = imageData => {
        this.setState({
            fields: {
                ...this.state.fields,
                imageLink: imageData
            }
        })
    }

    getLocationData = locationData => {
        const { location } = { ...locationData }
        this.setState({
            fields: {
                ...this.state.fields,
                location
            }
        })
    }

    getPaymentData = paymentData => {
        const { paymentMethod, price } = { ...paymentData }
        this.setState({
            fields: {
                ...this.state.fields,
                paymentMethod, price
            }
        })
    }

    getContactData = contactData => {
        const { phoneNumber, email } = { ...contactData }
        this.setState({
            fields: {
                ...this.state.fields,
                phoneNumber, email
            }
        })
    }

    submitProduct = () => {
        const {
            title,
            category,
            productType,
            description,
            imageLink,
            location,
            price,
            paymentMethod,
            phoneNumber,
            email,
            status
        } = this.state.fields;

        this.props.dispatch(actions.addProduct({
            title,
            category,
            productType,
            description,
            imageLink,
            location,
            price,
            paymentMethod,
            phoneNumber,
            email,
            status
        }));
    }

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-md-center'>
                    <div class='col-md-auto'>
                        <h2>Upload Product</h2>
                        <DetailsUpload toProductUpload={this.getDetailsData} />
                        <ImageUpload toProductUpload={this.getImageData} />
                        <PaymentUpload toProductUpload={this.getPaymentData} />
                        <ContactUpload toProductUpload={this.getContactData} />
                        <button onClick={this.submitProduct}><Link to='/success'>Post Furniture</Link></button>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(ProductUpload);