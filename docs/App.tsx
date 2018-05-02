import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router';
import createHashHistory from 'history/createBrowserHistory';
import Index from './index';
import Components from './pages/index';
import { RouteProps } from 'react-router';


const Routes: RouteProps[] = [
  {
    component: Index,
    path: '/',
    exact: true,
  },
  {
    component: Components,
    path: '/components/:name',
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
                <Route {...item} key={key}/>
              )
            })
          }
<<<<<<< HEAD
          <Redirect from="/components" to="/components/"/>
          <Route component={Index}/>
=======
          <Redirect from="/components" to='/components/yoshino'/>
>>>>>>> eead5d7134113bd5bb617f03e84d08e42e6a7594
        </Switch>
      </Router>
    )
  }
};
