import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import appHeight from './javascript/documentHeight';

// Components
import './components';
import {
  Home, NotFound, LogIn, Tasks, Registartion,
} from './pages';

// Assets
import './assets/stylesheets/Main.scss';

// Services
import * as serviceWorker from './serviceWorker';
import storeConfig from './store';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LogIn} />
        <Route path="/registration" exact component={Registartion} />
        <Route path="/" exact component={Home} />
        <Route path="/Tasks" exact component={Tasks} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
appHeight();
