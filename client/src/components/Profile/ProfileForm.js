import React from 'react';
import { Formik, Form, Field } from 'formik';

const ProfileForm = () => (
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
)

export default ProfileForm;