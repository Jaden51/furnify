import React, { Component } from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from './components/PrivateRoute';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Store from './containers/Store';
import UserProfile from './containers/UserProfile';
import Contact from './containers/Contact'
import SignUp from './components/SignUp';
import Login from './components/Login'
import ProductUpload from './components/ProductUpload/ProductUpload';
import Success from './components/ProductUpload/Success';
import Footer from './components/Home/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/store' component={Store} />
                    <Route path='/contact' exact component={Contact} />
                    <PrivateRoute path='/profile' exact component={UserProfile} />
                    <PrivateRoute path='/post' exact component={ProductUpload} />
                    <Route path='/signup' exact component={SignUp} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/success' exact component={Success} />
                </Switch>
                <Footer />
            </div>

        );
    }
}

export default App;