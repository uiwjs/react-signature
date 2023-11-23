import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import MonorepoTemplate from '../core/src';

test('renders learn react link', () => {
  render(<MonorepoTemplate>learn react</MonorepoTemplate>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
