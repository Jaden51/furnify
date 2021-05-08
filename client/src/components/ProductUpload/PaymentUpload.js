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

    isDisabled = () => {
        return true;
    }

    render() {
        const { paymentMethod } = this.state.fields;

        return (
            <Formik initialValues={this.state}>
                <Form>
                    <h3>3. Price</h3>
                    <div className='form-check'>
                        <Field
                            type='radio'
                            name='paymentMethod'
                            value='Price'
                            className='form-check-input'
                            checked={paymentMethod === 'Price'}
                            onChange={this.handleChange}
                        />
                        <label className='form-check-label'>$</label>
                        <Field
                            type='number'
                            name='price'
                            className='form-control'
                            onChange={this.handleChange}
                            disabled={paymentMethod !== 'Price' ? true : false}
                        />
                        <br />
                    </div>
                    <div className='form-check'>
                        <Field
                            type='radio'
                            name='paymentMethod'
                            value='Free'
                            className='form-check-input'
                            checked={paymentMethod === 'Free'}
                            onChange={this.handleChange}
                        />
                        <label>Free</label><br />
                    </div>
                    <div className='form-check'>
                        <Field
                            type='radio'
                            name='paymentMethod'
                            value='Please Contact'
                            className='form-check-input'
                            checked={paymentMethod === 'Please Contact'}
                            onChange={this.handleChange}
                        />
                        <label>Please Contact</label><br />
                    </div>
                    <div className='form-check'>
                        <Field
                            type='radio'
                            name='paymentMethod'
                            value='Trade'
                            className='form-check-input'
                            checked={paymentMethod === 'Trade'}
                            onChange={this.handleChange}
                        />
                        <label>Trade</label><br />
                    </div>
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