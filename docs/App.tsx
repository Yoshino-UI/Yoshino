import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, HashRouter as Router, Redirect } from 'react-router-dom';
import Index from './index';
import Page from './pages/index';
import { RouteProps } from 'react-router';

const Routes: RouteProps[] = [
  {
    component: Index,
    path: '/',
    exact: true,
  },
  {
    component: Page,
    path: '/docs/',
  },
];

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            Routes.map((item, key) => {
              return (
                <Route {...item} key={key}/>
              );
            })
          }
          <Redirect from='/docs/components' to='/docs/components/yoshino'/>
          <Route
            render={() => {
              return <Redirect to='/'/>;
            }}
          />
        </Switch>
      </Router>
    );
  }
}
