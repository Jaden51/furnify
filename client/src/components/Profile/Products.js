import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Button } from 'react-bootstrap';

class Products extends Component {
    render() {
        const { profile } = this.props.profile;

        return (
            <div>
                <h4>Products Page</h4>
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
                            Display Products here
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