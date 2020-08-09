import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Progress } from '../../container/index';
import storeConfig from '../../store';

const store = storeConfig();

test('renders learn react link', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Progress />
      </BrowserRouter>
    </Provider>,
  );
  const linkElement = container.firstChild;
  const subLinkElement = linkElement.firstChild.classList.contains('selection');
  expect(subLinkElement).toBe(true);
});
