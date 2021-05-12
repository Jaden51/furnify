import React, { Component } from 'react';
import { Form, Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as actions from '../store/actions/index';
import Alert from '../components/Alert';
import { v4 as uuidv4 } from 'uuid';

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
        const { name, email, password, confirmPass } = this.state.formData;
        const { alerts, dispatch } = this.props;
        const alertId = uuidv4();

        if (alerts.length !== 0) {
            dispatch(actions.removeAlert(alerts[0].id))
        }

        if (password !== confirmPass) {
            dispatch(actions.setAlert(
                'Passwords do not match',
                'danger',
                alertId
            ))
        } else {
            dispatch(actions.register({ name, email, password }));
        }
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
                    <h2 className='h1-responsive font-weight-bold text-center my-4'>Create Account</h2>
                        <Form>
                            <Alert />
                            <div className='form-group input-group'>
                                <Field
                                    type='text'
                                    placeholder='Full Name'
                                    name='name'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group input-group'>
                                <Field
                                    type='text'
                                    placeholder='Email Address'
                                    name='email'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group input-group'>
                                <Field
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group input-group'>
                                <Field
                                    type='password'
                                    placeholder='Confirm Password'
                                    name='confirmPass'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    value="Create Account"
                                />
                            </div>
                            <p className="text-center">
                                Already have an account? <Link to="/login">Sign In</Link>
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

export default connect(mapStateToProps)(SignUp);