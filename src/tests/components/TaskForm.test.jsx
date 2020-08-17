import React from 'react';
import { render } from '@testing-library/react';
import { TaskForm } from '../../components';

test('Renders TaskForm Succesfully', () => {
  const { getByText } = render(<TaskForm />);
  const linkElement = getByText(/Start a Task Now!/i);
  expect(linkElement).toBeInTheDocument();
});
