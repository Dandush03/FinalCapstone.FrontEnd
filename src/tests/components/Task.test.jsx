import React from 'react';
import { render } from '@testing-library/react';
import { Task } from '../../components';

test('Renders Task Succesfully', () => {
  const { getByText } = render(<Task data={{ name: 'Daniel' }} />);
  const linkElement = getByText(/Daniel/i);
  expect(linkElement).toBeInTheDocument();
});
