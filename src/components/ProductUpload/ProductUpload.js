import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import styled from 'styled-components';

import DetailsUpload from './DetailsUpload';
import ImageUpload from './ImageUpload';
import LocationUpload from './LocationUpload';

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
                location: ''
            }
        }
    }

    getImageData = imageData => {
        this.setState({
            fields: {
                ...this.state.fields,
                imageLink: imageData
            }
        })
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

    getLocationData = () => {

    }

    submitProduct = () => {
        const { title, category, productType, description, imageLink } = this.state.fields;

        this.props.dispatch(actions.addProduct({ title, category, productType, description, imageLink }));
    }

    render() {
        return (
            <StyledProductUpload>
                <div>
                    <h2>Upload Product</h2>
                    <DetailsUpload toProductUpload={this.getDetailsData} />
                    <ImageUpload toProductUpload={this.getImageData} />
                    <LocationUpload toProductUpload={this.getLocationData} />
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
// contact information
// createdAt,
// quantity