import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import CATEGORIES from '../../data/categories';

class DetailsUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                title: '',
                category: 'chair',
                productType: 'Non-Refurbished',
                description: '',
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

        if (CATEGORIES) {
            var categories = Object.keys(CATEGORIES).map((key, index) => {
                return (
                    <option key={CATEGORIES[key]} value={CATEGORIES[key]}>
                        {CATEGORIES[key]}
                    </option>
                )
            })
        }

        return (
            <Formik initialValues={this.state}>
                <Form>
                    <h3>1. Add Details</h3>
                    <Field
                        type='text'
                        placeholder='Title'
                        name='title'
                        className='input title-input'
                        onChange={this.handleChange}
                    />
                    <Field
                        component='select'
                        name='category'
                        onChange={this.handleChange}
                    >
                        {categories}
                    </Field>
                    <Field
                        type='text'
                        placeholder='Description'
                        name='description'
                        className='input desciprtion-input'
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

export default connect(mapStateToProps)(DetailsUpload);