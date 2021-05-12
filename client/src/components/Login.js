import React, { Component } from 'react';
import { Form, Formik, Field } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from '../components/Alert';
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

    componentDidMount() {
        const { alerts, dispatch } = this.props;
        for (let i = 0; i < alerts.length; i++) {
            dispatch(actions.removeAlert(alerts[i].id))
        }
    }

    handleChange = ({ target }) => {
        const { formData } = this.state;
        formData[target.name] = target.value;
        this.setState({ formData });
    }

    handleSubmit = async () => {
        const { alerts, dispatch } = this.props;
        const { email, password } = this.state.formData;

        if (alerts.length !== 0) {
            dispatch(actions.removeAlert(alerts[0].id))
        }

        dispatch(actions.login(email, password))
    }

    render() {
        if (this.props.auth.isAuthenticated) {
            return <Redirect to='/profile' />
        }

        return (
            <Formik
                initialValues={this.state}
                onSubmit={this.handleSubmit}
            >
                <div>
                    <article className='card-body mx-auto' style={{ maxWidth: '400px' }}>
                    <h2 className='h1-responsive font-weight-bold text-center my-4'>Sign In</h2>
                        <Form>
                            <Alert />
                            <div className='form-group input-group'>
                                <Field
                                    type='text'
                                    placeholder='Email Address'
                                    name='email'
                                    className='form-control'
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='form-group input-group'>
                                <Field
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    className='form-control'
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='submit'
                                    className="btn btn-primary btn-block"
                                    value='Login'
                                />
                            </div>
                            <p className='text-center'>
                                Don't have an account? <Link to='/signup'>Sign Up</Link>
                            </p>
                        </Form>
                    </article>
                </div>
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