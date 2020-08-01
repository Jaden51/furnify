import React, { Component } from 'react';
import { Form, Formik, Field } from 'formik';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                name: '',
                email: '',
                password: '',
                confirmPass: ''
            }
        }
    }

    handleChange = ({ target }) => {
        const { formData } = this.state;
        formData[target.name] = target.value;
        this.setState({ formData });
    }

    handleSubmit = async () => {
        const { password, confirmPass } = this.state.formData;
        if (password !== confirmPass) {
            console.log('Passwords do not match');
        } else {
            console.log(this.state.formData)
        }
    }

    render() {
        return (
            <Formik 
                initialValues={this.state}
                onSubmit={this.handleSubmit}
            >
                <Form>
                    <h2>Sign Up</h2>
                    <h3>Create Your Account</h3>
                    <Field
                        type='text'
                        placeholder='Name'
                        name='name'
                        className='input name-input'
                        required
                        onChange={this.handleChange}
                    /><br />
                    <Field
                        type='text'
                        placeholder='Email Address'
                        name='email'
                        className='input name-input'
                        required
                        onChange={this.handleChange}
                    /><br />
                    <Field
                        type='password'
                        placeholder='Password'
                        name='password'
                        className='input pass-input'
                        required
                        onChange={this.handleChange}
                    /><br />
                    <Field
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmPass'
                        className='input confirm-input'
                        required
                        onChange={this.handleChange}
                    /><br />
                    <input 
                        type="submit" 
                        className="btn btn-primary" 
                        value="Register"
                    />
                    <p className="my-1">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </Form>
            </Formik>
        )
    }
}

export default SignUp;