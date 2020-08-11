import React from 'react';
import { render } from '@testing-library/react';
import { ProgressBar } from '../../components';

test('Renders ProgressBar Succesfully', () => {
  const { getByText } = render(<ProgressBar percentage={0.5} name="Daniel" />);
  const linkElement = getByText(/Daniel/i);
  expect(linkElement).toBeInTheDocument();
});
