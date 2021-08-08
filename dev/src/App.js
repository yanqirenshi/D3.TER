import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

import Home from './pages/Home.js';

import { connectGithub } from './actions/sogh.js';

function makeSogh (sogh, connect) {
    const token = process.env.REACT_APP_GITHUB_PARSONAL_TOKEN;

    if (!token)
        return;

    if (sogh.updated_at!==null)
        return;

    connect(token);
}

function App(props) {
    useEffect(() => makeSogh(props.sogh, props.connectGithub), [props.sogh, props.connectGithub]);

    return (
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    );
}

export default connect(
    (state) => {
        return {
            sogh: state.sogh,
            repository: state.repository,
        };
    },
    (dispatch) => ({
        connectGithub: (token) => dispatch(connectGithub(token)),
    }),
)(App);
