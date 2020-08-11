import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Achivements } from '../../components';
import storeConfig from '../../store';

const store = storeConfig();
test('Renders Achivments Succesfully', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Achivements time={1254} name="Working" goal={(10 * 1)} img="/test" />
      </BrowserRouter>
    </Provider>,
  );
  const linkElement = getByText(/Time Spent/i);
  expect(linkElement).toBeInTheDocument();
});
