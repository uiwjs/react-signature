import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React, { useRef } from 'react';
import Signature, { SignatureRef } from '../core/src';

const points = {
  "path-1": [[83.52734375,63.6015625],[83.22265625,64.02734375],[81.86328125,66.0390625],[78.69140625,70.90625],[72.76171875,80.44140625],[67.01171875,91.421875],[64.5390625,98.19921875],[63.83203125,101.25390625],[63.640625,102.5078125],[63.62109375,102.7109375],[63.96484375,102.22265625],[64.890625,100.87890625],[66.3671875,98.515625]],
  "path-2": [[116.5546875,65.8359375],[117.3125,65.8359375],[119.23046875,65.90625],[122.078125,66.39453125],[125.44140625,67.51171875],[128.33203125,69.2421875],[130.6484375,71.53515625],[131.94140625,73.6796875],[132.28125,75.65234375],[132.0625,77.5],[130.33203125,79.78125],[126.4921875,83.24609375],[120.9375,87.5234375],[114.859375,91.13671875],[108.09765625,93.66796875],[101.8359375,94.7734375],[96.26953125,94.7734375],[92.23828125,94.90625],[89.94921875,94.96484375],[88.234375,95.04296875],[88.03515625,95.08984375],[89.6015625,95.4296875],[94.75,96.640625],[107.55859375,98.640625],[123.6171875,100.09375],[135.5546875,100.734375],[141.140625,101.03515625],[142.2578125,101.08984375]]
}

test('renders learn react link', () => {
  render(<Signature>learn react</Signature>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders <Signature /> defaultPoints props test case', () => {
  const { debug } = render(
    <Signature width="450" height="230" data-testid="keyname" defaultPoints={points} />
  );
  const copied = screen.getByTestId('keyname');
  expect(copied.tagName).toEqual('svg');
  expect(copied.style).toHaveProperty('height', '100%');
  expect(copied.style).toHaveProperty('width', '100%');
  expect(copied.style).toHaveProperty('position', 'relative');
  expect(copied.getAttribute('width')).toEqual('450');
  expect(copied.getAttribute('height')).toEqual('230');
  expect(copied.getAttribute('class')).toEqual('w-signature');
  
  if (copied.firstChild) {
    const path = copied.firstChild as SVGPathElement;
    expect(path.tagName).toEqual('path');
    const lastChild = copied.lastChild as SVGPathElement;
    expect(lastChild.tagName).toEqual('path');
  }
});


it('renders <Signature /> empty path test case', () => {
  render(
    <Signature width="450" height="230" data-testid="keyname" />
  );
  const svg = screen.getByTestId('keyname');
  expect(svg.tagName).toEqual('svg');
  expect(svg.style).toHaveProperty('height', '100%');
  expect(svg.style).toHaveProperty('width', '100%');
  expect(svg.style).toHaveProperty('position', 'relative');
  expect(svg.getAttribute('width')).toEqual('450');
  expect(svg.getAttribute('height')).toEqual('230');
  expect(svg.getAttribute('class')).toEqual('w-signature');
  
  const path = svg.firstChild as SVGPathElement;
  expect(path).toBeNull();
});


it('renders <Signature /> clear test case', () => {
  function App() {
    const $svg = useRef<SignatureRef>(null);
    const handle = (evn: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      $svg.current?.clear()
    };
    return (
      <>
        <Signature data-testid="signature" ref={$svg} defaultPoints={points} fill="red" />
        <button onClick={handle}>Clear</button>
      </>
    );
  }
  render(<App />);

  const svg = screen.getByTestId("signature");
  const clearButton = screen.getByText("Clear");

  // Ensure the Signature component is rendered
  expect(svg).toBeInTheDocument();

  const path = svg.firstChild as SVGPathElement;
  expect(path).toBeInTheDocument();

  // Simulate a click on the Clear button
  fireEvent.click(clearButton);
  const path2 = svg.firstChild as SVGPathElement;
  expect(path2).toBeNull();
  
});


it('renders <Signature /> clear test case', () => {
  const { debug } = render(<Signature width="450" height="230" data-testid="signature" fill="red" />);

  const svg = screen.getByTestId("signature");
  // Ensure the Signature component is rendered
  expect(svg).toBeInTheDocument();

  // Create a mock event object
  const mockEvent = new MouseEvent('pointerup', {
    bubbles: true,
    cancelable: true,
    clientX: 100, // Set clientX to a desired value
    clientY: 200, // Set clientY to a desired value
    // Add other properties as needed
  });
  fireEvent(svg, mockEvent);

  // Create a mock event object
  const moveMockEvent = new MouseEvent('pointermove', {
    bubbles: true,
    cancelable: true,
    clientX: 150, // Set clientX to a desired value
    clientY: 250, // Set clientY to a desired value
    // Add other properties as needed
  });

  // Trigger a pointermove event with the mock event object
  fireEvent(svg, moveMockEvent);

});