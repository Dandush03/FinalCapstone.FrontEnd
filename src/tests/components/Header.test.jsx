import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../../components';

test('Renders Header Succesfully', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/DLTrackTask/i);
  expect(linkElement).toBeInTheDocument();
});
