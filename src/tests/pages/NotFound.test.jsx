import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from '../../pages/index';
import storeConfig from '../../store';

const store = storeConfig();

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    </Provider>,
  );
  const linkElement = getByText(/Page Not Found/i);
  expect(linkElement).toBeInTheDocument();
});
