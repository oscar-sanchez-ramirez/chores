import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { Navbar } from '../Router/Navbar';
import { Home } from '../Menu/Home'
import { Directories } from '../Menu/Directories';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home} ></Route>
                    <Route exact path="/directories" component={Directories }></Route>
                </Switch>
            </div>
        </Router>
    )
}
