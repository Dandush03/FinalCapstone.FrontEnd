import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Tasks } from '../../pages';
import storeConfig from '../../store';

const store = storeConfig();

test('renders learn react link', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Tasks />
      </BrowserRouter>
    </Provider>,
  );
  const linkElement = container.firstChild;
  expect(linkElement).toBe(null);
});
