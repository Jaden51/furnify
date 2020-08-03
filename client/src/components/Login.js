import React, { Component } from 'react';
import { Form, Formik, Field } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

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
        const { email, password } = this.state.formData;
        this.props.dispatch(actions.login(email, password))
    }

    render() {
        if (this.props.auth.isAuthenticated) {
            return <Redirect to='/store' />
        }
        
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

const mapStateToProps = state => {
    return {
        alerts: state.alerts,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Login);