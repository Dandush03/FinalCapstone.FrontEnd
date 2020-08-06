import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

import storeConfig from '../store';

import Home from '../pages/Home';

const store = storeConfig();
test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>,
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
