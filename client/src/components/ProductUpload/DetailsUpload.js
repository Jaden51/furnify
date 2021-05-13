import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'formik';
import CATEGORIES from '../../data/categories';

class DetailsUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                title: '',
                category: 'Sofas and Armchairs',
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
            <div>
                <h5>1. Details</h5>
                <Field
                    type='text'
                    placeholder='Title'
                    name='title'
                    className='form-control'
                    onChange={this.handleChange}
                    required
                />
                <span style={{ margin: '.5rem' }}></span>
                <Field
                    component='select'
                    name='category'
                    className='form-select form-select-sm'
                    aria-label='.form-select-sm'
                    onChange={this.handleChange}
                >
                    {categories}
                </Field>
                <span style={{ margin: '.5rem' }}></span>
                <Field
                    type='textarea'
                    placeholder='Description (optional)'
                    name='description'
                    className='form-control'
                    onChange={this.handleChange}
                />
                <hr />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(DetailsUpload);