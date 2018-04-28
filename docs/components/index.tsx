import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, Router } from 'react-router';
import createHashHistory from 'history/createBrowserHistory';
import Button from './Button';
const Routes = [
  {
    component: Button,
    path: 'button'
  }
];

const history = createHashHistory();

export default class Components extends Component {
  render() {
    return (
      <div>
        1
        <Router history={history}>
          <Switch>
            {
              Routes.map((item, key) => {
                return (
                  <Route {...item} path={`/components/${item.path}`} key={key} exact/>
                )
              })
            }
          </Switch>
        </Router>
      </div>
    )
  }
};
