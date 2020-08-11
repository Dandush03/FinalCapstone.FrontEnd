import React from 'react';
import { render } from '@testing-library/react';
import { TasksList } from '../../components';

test('Renders TasksList Succesfully', () => {
  const { container } = render(<TasksList data={[{}]} />);
  const linkElement = container.firstChild.classList.contains('tasks-list');
  expect(linkElement).toBe(true);
});
