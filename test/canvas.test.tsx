import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React, { useRef } from 'react';
import Signature from '../core/src/canvas';

it('renders <Signature /> empty path test case', () => {
  render(
    <Signature width="450" height="230" data-testid="keyname" />
  );
  const svg = screen.getByTestId('keyname');
  expect(svg.tagName).toEqual('CANVAS');
  expect(svg.style).toHaveProperty('position', 'relative');
  expect(svg.getAttribute('width')).toEqual('450');
  expect(svg.getAttribute('height')).toEqual('230');
  expect(svg.getAttribute('class')).toEqual('w-signature');
  
});
