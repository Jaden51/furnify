import React, { Component, Fragment } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import './components/Firebase';

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