import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Products extends Component {
    render() {

        const { profile } = this.props.profile;

        var products = profile.products.map((product, index) => {
            return (
                <tr key={product._id}>
                    <th scope='row'>{index + 1}</th>
                    <td className='w-25'>
                        <img className='img-thumbnail' alt='tempimg' src={product.imageLink} width='300' height='300'></img>
                    </td>
                    <td>{product.title}</td>
                    {product.price === 0 ? (<td>{product.paymentMethod}</td>) : (<td>${product.price}</td>)}
                    <td>{product.status}</td>
                </tr>
            )
        })

        return (
            <div>
                <h4 className="h1-responsive font-weight-bold text-center my-4">Products</h4>
                {profile.products.length === 0 ? (
                    <div>
                        <p>You currently have no products displayed on the site.</p>
                        <Link
                            to={{
                                pathname: "/post"
                            }}
                        ><button className='btn btn-secondary'>Post Product</button></Link>
                    </div>
                ) : (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Number</th>
                                            <th scope='col'>Image</th>
                                            <th scope='col'>Title</th>
                                            <th scope='col'>Price</th>
                                            <th scope='col'>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps)
)(Products);