import React, { Component, Fragment } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import './components/Firebase';
// import { firebase } from './components/Firebase';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <NavBar />
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log('log in');
//     } else {
//         console.log('log out');
//     }
// });