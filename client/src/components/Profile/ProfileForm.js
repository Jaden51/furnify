import React from 'react';
import { Formik, Form } from 'formik';
import { Link, useRouteMatch, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Products from './Products';
import Messages from './Messages';
import Favourites from './Favourites';
import Orders from './Orders';

const ProfileForm = () => {
    let { path, url } = useRouteMatch();

    return (
        <Formik>
            <Form>
                <Router>
                    <Link to={`${url}/products`}>
                        <button>
                            <span>Products</span>
                        </button>
                    </Link><br />
                    <Link to={`${url}/messages`}>
                        <button>
                            <span>Messages</span>
                        </button>
                    </Link><br />
                    <Link to={`${url}/favourites`}>
                        <button>
                            <span>Favourites</span>
                        </button>
                    </Link><br />
                    <Link to={`${url}/orders`}>
                        <button>
                            <span>Orders</span>
                        </button>
                    </Link><br />

                    <Switch>
                        <Route path={`${path}/products`}>
                            <Products />
                        </Route>
                        <Route path={`${path}/messages`}>
                            <Messages />
                        </Route>
                        <Route path={`${path}/favourites`}>
                            <Favourites />
                        </Route>
                        <Route path={`${path}/orders`}>
                            <Orders />
                        </Route>
                    </Switch>
                </Router>
            </Form>
        </Formik>
    )
}

export default ProfileForm;