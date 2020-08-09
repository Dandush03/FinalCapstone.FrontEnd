import React from 'react';
import { render } from '@testing-library/react';
import { Achivements } from '../../components/index';

test('Renders Achivments Succesfully', () => {
  const { getByText } = render(<Achivements time={1254} name="Working" goal={(10 * 1)} img="/test" />);
  const linkElement = getByText(/Time Spent/i);
  expect(linkElement).toBeInTheDocument();
});
