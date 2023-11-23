react-signature
===

[![Build & Deploy](https://github.com/uiwjs/react-signature/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-signature/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-signature/badges.svg)](https://uiwjs.github.io/react-signature/lcov-report/)

A signature board component for react.


## Quick Start

```bash
npm install @uiw/react-signature
```

```jsx mdx:preview
import React, { useRef } from "react";
import Signature from '@uiw/react-signature';

export default function App() {
  const $svg = useRef(null);
  const handle = (evn) => {
    const parentElement = $svg.current
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }
  return (
    <>
      <Signature ref={$svg} />
      <button onClick={() => handle()}>Clear</button>
    </>
  );
}
```

## Props

```ts
import React from 'react';
import { type StrokeOptions } from 'perfect-freehand';
export interface SignatureProps extends React.SVGProps<SVGSVGElement> {
  prefixCls?: string;
  options?: StrokeOptions;
  onPointer?: (points: number[][]) => void;
}
export default function Signature(props?: SignatureProps): React.JSX.Element;
```

utils

```ts
import { type StrokeOptions } from 'perfect-freehand';
/**
 * Turn the points returned from perfect-freehand into SVG path data.
 */
export declare function getSvgPathFromStroke(stroke: number[][]): string;
export declare const defaultOptions: StrokeOptions;
export declare const getBoundingClientRect: (el: SVGSVGElement | null) => {
    offsetX: number;
    offsetY: number;
};
export declare const getClinetXY: ({ clientX, clientY }: PointerEvent) => {
    clientX: number;
    clientY: number;
};
export declare const defaultStyle: React.CSSProperties;
```

### Options

The options object is optional, as are each of its properties.

| Property           | Type     | Default | Description                                           |
| ------------------ | -------- | ------- | ----------------------------------------------------- |
| `size`             | number   | 8       | The base size (diameter) of the stroke.               |
| `thinning`         | number   | .5      | The effect of pressure on the stroke's size.          |
| `smoothing`        | number   | .5      | How much to soften the stroke's edges.                |
| `streamline`       | number   | .5      | How much to streamline the stroke.                    |
| `simulatePressure` | boolean  | true    | Whether to simulate pressure based on velocity.       |
| `easing`           | function | t => t  | An easing function to apply to each point's pressure. |
| `start`            | { }      |         | Tapering options for the start of the line.           |
| `end`              | { }      |         | Tapering options for the end of the line.             |
| `last`             | boolean  | false    | Whether the stroke is complete.                       |

**Note:** When the `last` property is `true`, the line's end will be drawn at the last input point, rather than slightly behind it.

The `start` and `end` options accept an object:

| Property | Type              | Default | Description                                                                              |
| -------- | ----------------- | ------- | ---------------------------------------------------------------------------------------- |
| `cap`    | boolean           | true    | Whether to draw a cap.                                                                   |
| `taper`  | number or boolean | 0       | The distance to taper. If set to true, the taper will be the total length of the stroke. |
| `easing` | function          | t => t  | An easing function for the tapering effect.                                              |

**Note:** The `cap` property has no effect when `taper` is more than zero.

```js
<Signature
  options={{
    size: 6,
    smoothing: 0.46,
    thinning: 0.73,
    streamline: 0.5,
    easing: (t) => t,
    simulatePressure: true,
    last: true,
    start: {
      cap: true,
      taper: 0,
      easing: (t) => t,
    },
    end: {
      cap: true,
      taper: 0,
      easing: (t) => t,
    },
  }}
/>
```

> **Tip:** To create a stroke with a steady line, set the `thinning` option to `0`.

> **Tip:** To create a stroke that gets thinner with pressure instead of thicker, use a negative number for the `thinning` option.

## Development

1. Dependencies in the installation package and example

```bash
npm run install
```

2. To develop, run the self-reloading build:

```bash
npm run build  # Compile packages      📦 @uiw/react-signature
npm run watch  # Real-time compilation 📦 @uiw/react-signature
```

3. Run Document Website Environment:

```bash
npm run start
```

4. To contribute, please fork repos, add your patch and tests for it (in the `test/` folder) and submit a pull request.

```
npm run test
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-signature/graphs/contributors">
  <img src="https://uiwjs.github.io/react-signature/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.