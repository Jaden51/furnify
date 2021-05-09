import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'formik';

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
            <div>
                <h3>3. Price</h3>
                <div className='form-check'>
                    <Field
                        type='radio'
                        name='paymentMethod'
                        value='Price'
                        className='form-check-input'
                        checked={paymentMethod === 'Price'}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='input-group'>
                        <span className='input-group-text'>$</span>
                        <Field
                            type='number'
                            step='.01'
                            name='price'
                            className='form-control'
                            onChange={this.handleChange}
                            disabled={paymentMethod !== 'Price' ? true : false}
                            required
                        />
                    </div>
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
                        required
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
                        required
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
                        required
                    />
                    <label>Trade</label><br />
                </div>
                <hr />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(PaymentUpload);