import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router';
import createHashHistory from 'history/createBrowserHistory';
import Index from './index';
import Components from './pages/index';

const Routes = [
  {
    component: Index,
    path: '/',
  },
  {
    component: Components,
    path: '/components/*',
  },
];

const history = createHashHistory();

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
          <Redirect from="/components" to="/components/"/>
          <Route component={Index}/>
        </Switch>
      </Router>
    )
  }
};
