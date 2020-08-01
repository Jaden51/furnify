import React, { Component } from 'react';
import { Form, Formik, Field } from 'formik';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: '',
            }
        }
    }

    handleChange = ({ target }) => {
        const { formData } = this.state;
        formData[target.name] = target.value;
        this.setState({ formData });
    }

    handleSubmit = async () => {
        console.log('Success')
    }

    render() {
        return (
            <Formik 
                initialValues={this.state}
                onSubmit={this.handleSubmit}
            >
                <Form>
                    <h2>Sign In</h2>
                    <h3>Sign Into Your Account</h3>
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
                    <input 
                        type='submit'
                        className='btn' 
                        value='Login'
                    />
                    <p>
                        Don't have an account? <Link to='/signup'>Sign Up</Link>
                    </p>
                </Form>
            </Formik>
        )
    }
}

export default Login;