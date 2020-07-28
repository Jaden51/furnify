import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import styled from 'styled-components';

import DetailsUpload from './DetailsUpload';
import ImageUpload from './ImageUpload';
import LocationUpload from './LocationUpload';
import PaymentUpload from './PaymentUpload';
import ContactUpload from './ContactUpload';

class ProductUpload extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: {},
            fields: {
                title: '',
                category: 'chair',
                productType: 'Non-Refurbished',
                description: '',
                imageLink: '',
                location: '',
                price: 0,
                paymentMethod: '',
                phoneNumber: 0,
                email: ''
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
            email
        } = this.state.fields;

        console.log(this.state.fields)

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
            email
        }));
    }

    render() {
        return (
            <StyledProductUpload>
                <div>
                    <h2>Upload Product</h2>
                    <DetailsUpload toProductUpload={this.getDetailsData} />
                    <ImageUpload toProductUpload={this.getImageData} />
                    <LocationUpload toProductUpload={this.getLocationData} />
                    <PaymentUpload toProductUpload={this.getPaymentData} />
                    <ContactUpload toProductUpload={this.getContactData} />
                    <button
                        onClick={this.submitProduct}
                        className='button'
                    >Post Furniture</button>
                </div >
            </StyledProductUpload>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(ProductUpload);

const StyledProductUpload = styled.div`
    .button {
        margin: 25px 50px 75px 0px;
    }
`;

// id,
// title,
// category,
// product type,
// description 
// imageLink,
// location,
// price,
// paymentMethod,
// phone number,
// email,
// createdAt,