import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Button } from 'react-bootstrap';

class Products extends Component {
    render() {
        const { profile } = this.props.profile;

        var products = profile.products.map(product => {
            return (
                <div key={product._id}>
                    <h4>{product.title}</h4>
                    <img alt='tempimg'></img>
                    <p>Status: {product.status}</p>
                </div>
            )
        })

        return (
            <div>
                <h4>Your Products</h4>
                {profile.products.length === 0 ? (
                    <div>
                        <p>You currently have no products displayed on the site</p>
                        <Link
                            to={{
                                pathname: "/post"
                            }}
                        ><Button>Post Product</Button></Link>
                    </div>
                ) : (
                    <div>
                        {products}
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