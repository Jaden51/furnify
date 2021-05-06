import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            view: null
        }
    }

    handleClick = i => {
        this.setState({ view: i }, () => {
            this.props.toUserProfile(this.state.view);
        });
    }

    render() {
        return (
            <Formik>
                <Form>
                    <Button onClick={this.handleClick.bind(this, 3)}>Products</Button><br />
                    <Button onClick={this.handleClick.bind(this, 0)}>Messages</Button><br />
                    <Button onClick={this.handleClick.bind(this, 1)}>Favourites</Button><br />
                    <Button onClick={this.handleClick.bind(this, 2)}>Orders</Button><br />
                </Form>
            </Formik>
        )
    }
}



export default ProfileForm;