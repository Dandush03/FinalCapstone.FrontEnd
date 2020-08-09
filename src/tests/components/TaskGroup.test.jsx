import React from 'react';
import { render } from '@testing-library/react';
import { TaskGroup } from '../../components/index';

test('Renders TaskGroup Succesfully', () => {
  const { getByText } = render(<TaskGroup data={[{}]} date="test" />);
  const linkElement = getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
