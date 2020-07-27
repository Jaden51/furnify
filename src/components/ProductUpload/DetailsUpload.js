import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';

const CATEGORIES = ['Chair', 'Table', 'Stool', 'Loveseat'];

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
                        name='productType'
                        onChange={this.handleChange}
                    >
                        <option>Non-Refurbished</option>
                        <option>Refurbished</option>
                    </Field>
                    <Field
                        component='select'
                        name='category'
                        onChange={this.handleChange}
                    >
                        {CATEGORIES.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
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