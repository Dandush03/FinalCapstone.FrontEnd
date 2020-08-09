import React from 'react';
import { render } from '@testing-library/react';
import { TaskStopForm } from '../../components/index';

test('Renders TaskStopForm Succesfully', () => {
  const { getByText } = render(<TaskStopForm timer="123" task={{ id: 1, name: 'string' }} />);
  const linkElement = getByText(/Stop/i);
  expect(linkElement).toBeInTheDocument();
});
