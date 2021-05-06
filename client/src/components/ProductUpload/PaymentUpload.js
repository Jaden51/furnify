import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';

class PaymentUpload extends Component {
    state = {
        fields: {
            price: 0,
            paymentMethod: ''
        }
    }

    handleChange = ({ target }) => {
        const { fields } = this.state;
        fields[target.name] = target.value;
        this.setState({ fields });
        this.props.toProductUpload(this.state.fields);
    }

    render() {
        const { paymentMethod } = this.state.fields;

        return (
            <Formik initialValues={this.state}>
                <Form>
                    <h3>3. Price</h3>
                    <label>Price</label>
                    <Field
                        type='radio'
                        name='paymentMethod'
                        value='Price'
                        checked={paymentMethod === 'Price'}
                        onChange={this.handleChange}
                    />
                    <label>$</label>
                    <Field
                        type='number'
                        name='price'
                        onChange={this.handleChange}
                    /><br />
                    <Field
                        type='radio'
                        name='paymentMethod'
                        value='Free'
                        checked={paymentMethod === 'Free'}
                        onChange={this.handleChange}
                    />
                    <label>Free</label><br />
                    <Field
                        type='radio'
                        name='paymentMethod'
                        value='Please Contact'
                        checked={paymentMethod === 'Please Contact'}
                        onChange={this.handleChange}
                    />
                    <label>Please Contact</label><br />
                    <Field
                        type='radio'
                        name='paymentMethod'
                        value='Trade'
                        checked={paymentMethod === 'Trade'}
                        onChange={this.handleChange}
                    />
                    <label>Trade</label><br />
                </Form>
            </Formik>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(PaymentUpload);