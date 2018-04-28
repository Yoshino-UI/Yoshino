import * as React from 'react';
import { Component } from 'react';
// import {
//   Route,
// } from "react-router-dom";
import { Switch, Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Index from './index';

const Routes = [
  {
    component: Index,
    path: '/',
  }
];

const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {
            Routes.map((item, key) => {
              return (
                <Route {...item} key={key} exact/>
              )
            })
          }
        </Switch>
      </Router>
    )
  }
};
