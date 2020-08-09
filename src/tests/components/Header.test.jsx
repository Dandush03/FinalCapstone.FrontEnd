import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../../components/index';

test('Renders Header Succesfully', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/DLTrackTask/i);
  expect(linkElement).toBeInTheDocument();
});
