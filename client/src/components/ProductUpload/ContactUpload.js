import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';

class ContactUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                phoneNumber: 0,
                email: ''
            }
        }
    }

    handleChange = ({ target }) => {
        const { fields } = this.state;
        fields[target.name] = target.value;
        this.setState({ fields });
        this.props.toProductUpload(this.state.fields);
    }

    render() {
        return (
            <Formik>
                <Form>
                    <h3>4. Contact Information</h3>
                    <Field 
                        type='text'
                        placeholder='Phone Number (optional)'
                        name='phoneNumber'
                        onChange={this.handleChange}
                    /><br />
                    <Field 
                        type='text'
                        placeholder='Email (optional)'
                        name='email'
                        onChange={this.handleChange}
                    />
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

export default connect(mapStateToProps)(ContactUpload);