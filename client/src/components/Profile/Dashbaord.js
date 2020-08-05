import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import * as actions from '../../store/actions/index';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auth: null, 
            profile: null
        }
    }

    render() {
        return (
            <StyledDashboard>
                <Formik>
                    <Form>
                        <Field
                            type='button'
                            value='Products'
                            className='btn'
                        /><br />
                        <Field
                            type='button'
                            value='Messages'
                            className='btn'
                        /><br />
                        <Field
                            type='button'
                            value='Favourites'
                            className='btn'
                        /><br />
                        <Field
                            type='button'
                            value='Orders'
                            className='btn'
                        /><br />
                        <Field
                            type='button'
                            value='Profile'
                            className='btn'
                        />
                    </Form>
                </Formik>
            </StyledDashboard>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Dashboard);

const StyledDashboard = styled.div`
    .btn {
        width: 20px
        text-font: 50px
    }
`;