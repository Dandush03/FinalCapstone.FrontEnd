import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../../containers';
import storeConfig from '../../store';

const store = storeConfig();

test('renders learn react link', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </Provider>,
  );
  const linkElement = container.children[0].childElementCount;
  expect(linkElement).toBe(4);
});
