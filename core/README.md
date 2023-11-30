react-signature
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Build & Deploy](https://github.com/uiwjs/react-signature/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-signature/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-signature/badges.svg)](https://uiwjs.github.io/react-signature/lcov-report/)
[![npm version](https://img.shields.io/npm/v/@uiw/react-signature.svg)](https://www.npmjs.com/package/@uiw/react-signature)

A signature board component for react.

[![react-signature](https://github.com/uiwjs/react-signature/assets/1680273/85bdb3d3-dfe5-4dc5-a95b-72cde1a9a10c)](https://uiwjs.github.io/react-signature/)

## Quick Start

```bash
npm install @uiw/react-signature
```

```jsx mdx:preview
import React, { useRef } from "react";
import Signature from '@uiw/react-signature';

export default function App() {
  const $svg = useRef(null);
  const handle = (evn) => $svg.current?.clear();
  return (
    <>
      <Signature ref={$svg} />
      <button onClick={handle}>Clear</button>
    </>
  );
}
```

## Readonly

```jsx mdx:preview
import React, { useRef, useEffect } from "react";
import Signature from '@uiw/react-signature';

const points = {
  "path-01": [[81.546875,38.87890625],[82.34375,37.55078125],[84.27734375,35.2265625],[87.73046875,33.2421875],[94.98046875,30.87890625],[106.29296875,28.6796875],[118.23828125,27.71875],[126.6953125,29.45703125],[134.9375,36.22265625],[141.8359375,47.13671875],[143.9765625,59.53515625],[141.8671875,76],[128.1484375,98.9609375],[106.203125,118.87109375],[95.04296875,125.8203125],[94.5859375,125.04296875],[94.7265625,122.04296875],[97.90234375,115.30859375],[109.28515625,102.3046875],[129.75390625,86.796875],[155.27734375,76.14453125],[184.99609375,71.8828125],[218.16015625,73.33984375],[249.26953125,77.8671875],[264.2421875,81.10546875],[266.51171875,82.35546875],[267.69921875,82.99609375],[267.64453125,83.08203125],[267.73046875,82.6875],[267.73828125,80.4921875],[267.83203125,75.4765625],[268.36328125,66.6484375],[268.84765625,56.4609375],[268.421875,46.88671875],[266.9296875,40.86328125],[264.90625,38.4765625],[262.87890625,37.30859375],[258.68359375,39.13671875],[251.265625,43.80078125],[242.21484375,51.79296875],[232.60546875,63.21484375],[222.6484375,78.53125],[213.01171875,94.58984375],[206.3203125,104.57421875],[201.64453125,109.59375],[198.61328125,111.87109375],[197.24609375,111.3671875],[195.421875,109.23828125],[193.87890625,104.91015625],[193.7265625,99.140625],[198.671875,89.87109375],[214.1015625,75.14453125],[243.25390625,54.8671875],[290.3671875,29.3515625],[329.31640625,10.6875],[338.9609375,6.70703125],[338.5234375,9.07421875],[336.8671875,15.4453125],[331.4296875,28.4140625],[323.234375,43.5234375],[312.70703125,57.9609375],[302.296875,66.97265625],[293.85546875,70.734375],[287.6484375,72.25],[283.45703125,70.9453125],[280.51171875,68.09375],[279.5390625,64.13671875],[280.828125,60.0234375],[284.98828125,56.40625],[294.63671875,54.62109375],[307.8984375,56.17578125],[316.7890625,62.65234375],[317.5859375,74.11328125],[309.1640625,92.50390625],[295.12109375,110.55859375],[282.93359375,123.125],[278.58203125,129.00390625],[279.46875,129.80859375],[285.25390625,129.26953125],[299.71484375,125.71875],[321.41015625,118.89453125],[349.296875,108.58203125],[372.53125,98.8671875],[387.57421875,91],[395.23046875,84.53125],[396.7421875,79.3046875],[395.31640625,75.45703125],[389.86328125,73.57421875],[374.875,77.3203125],[347.36328125,88.46875],[310.44140625,107.75],[273.14453125,130.30078125],[252.08984375,145.77734375],[246.2890625,152.421875],[245.4609375,153.8046875],[245.3671875,153.1640625],[245.78515625,148.46875],[247.5859375,136.29296875],[250.55078125,119.38671875],[253.1796875,107.87890625],[255.4765625,102.29296875],[257.40625,99.61328125],[260.58203125,99.8125],[273.9453125,105.66015625],[296.24609375,118.10546875],[326.40234375,138.03125],[355.63671875,158.3515625],[368.66796875,167.1796875],[373.015625,170.12109375],[374.7578125,170.8203125],[374.73046875,169.78125],[374.6953125,167.3203125],[374.765625,161.75],[375.6328125,154.09375],[377.94921875,146.08984375],[380.94921875,140.23046875],[383.6640625,136.3046875],[385.0546875,134.08203125],[385.19140625,133.45703125],[384.81640625,132.41015625]],
  "path-02": [[335.0078125,77.8828125],[335.31640625,77.984375],[336.16796875,78.30078125],[337.640625,79.0546875],[339.65234375,80.44140625],[342.88671875,82.921875],[347.0625,86.28125],[353.9296875,91.546875],[358.88671875,95.125],[359.7734375,95.6875],[360.48828125,96.19921875],[360.2265625,96.42578125]]
}

export default function App() {
  return (
    <Signature defaultPoints={points} readonly fill="#6b85e4" />
  );
}
```

## Background Color & Text color

Background transparency can be set with `--w-signature-background: transparent;`

```jsx mdx:preview
import React, { useRef } from "react";
import Signature from '@uiw/react-signature';

export default function App() {
  const $svg = useRef(null);
  const handle = (evn) => $svg.current?.clear();
  return (
    <>
      <Signature ref={$svg} fill="red" style={{ "--w-signature-background": "#e4e6ef" }} />
      <button onClick={handle}>Clear</button>
    </>
  );
}
```

## Create Points

```jsx mdx:preview
import React, { useRef, useState, useCallback, useEffect } from "react";
import Signature from '@uiw/react-signature';

export default function App() {
  const $svg = useRef(null);
  const [points, setPoints] = useState([])
  const handle = (evn) => {
    $svg.current?.clear();
    setPoints([])
  }
  const handlePoints = (data) => {
    if (data.length > 0) {
      setPoints([ ...points, JSON.stringify(data) ]);
    }
  }
  return (
    <>
      <Signature ref={$svg} onPointer={handlePoints} />
      <button onClick={handle}>Clear</button>
      {points.map((item, idx) => {
        return <pre key={idx} style={{ whiteSpace: 'pre-wrap' }}>{item}</pre>
      })}
    </>
  );
}
```

## Render Path

```jsx mdx:preview
import React, { useRef } from "react";
import Signature from '@uiw/react-signature';

const points = {
  "path-1": [[83.52734375,63.6015625],[83.22265625,64.02734375],[81.86328125,66.0390625],[78.69140625,70.90625],[72.76171875,80.44140625],[67.01171875,91.421875],[64.5390625,98.19921875],[63.83203125,101.25390625],[63.640625,102.5078125],[63.62109375,102.7109375],[63.96484375,102.22265625],[64.890625,100.87890625],[66.3671875,98.515625]],
  "path-2": [[116.5546875,65.8359375],[117.3125,65.8359375],[119.23046875,65.90625],[122.078125,66.39453125],[125.44140625,67.51171875],[128.33203125,69.2421875],[130.6484375,71.53515625],[131.94140625,73.6796875],[132.28125,75.65234375],[132.0625,77.5],[130.33203125,79.78125],[126.4921875,83.24609375],[120.9375,87.5234375],[114.859375,91.13671875],[108.09765625,93.66796875],[101.8359375,94.7734375],[96.26953125,94.7734375],[92.23828125,94.90625],[89.94921875,94.96484375],[88.234375,95.04296875],[88.03515625,95.08984375],[89.6015625,95.4296875],[94.75,96.640625],[107.55859375,98.640625],[123.6171875,100.09375],[135.5546875,100.734375],[141.140625,101.03515625],[142.2578125,101.08984375]]
}

export default function App() {
  const $svg = useRef(null);
  const handle = (evn) => $svg.current?.clear();
  return (
    <>
      <Signature
        ref={$svg}
        defaultPoints={points}
        renderPath={(path, keyName, data, index) => {
          if (keyName === 'path-1' || index === 0) {
            return <path d={path} fill="red" />
          }
          if (keyName === 'path-2' || index === 1) {
            return <path d={path} fill="blue" />
          }
        }}
      />
      <button onClick={handle}>Clear</button>
    </>
  );
}
```

## Stroke

```jsx mdx:preview
import React, { useRef } from "react";
import Signature from '@uiw/react-signature';

const points = {
  "path-1": [[83.52734375,63.6015625],[83.22265625,64.02734375],[81.86328125,66.0390625],[78.69140625,70.90625],[72.76171875,80.44140625],[67.01171875,91.421875],[64.5390625,98.19921875],[63.83203125,101.25390625],[63.640625,102.5078125],[63.62109375,102.7109375],[63.96484375,102.22265625],[64.890625,100.87890625],[66.3671875,98.515625]],
  "path-2": [[116.5546875,65.8359375],[117.3125,65.8359375],[119.23046875,65.90625],[122.078125,66.39453125],[125.44140625,67.51171875],[128.33203125,69.2421875],[130.6484375,71.53515625],[131.94140625,73.6796875],[132.28125,75.65234375],[132.0625,77.5],[130.33203125,79.78125],[126.4921875,83.24609375],[120.9375,87.5234375],[114.859375,91.13671875],[108.09765625,93.66796875],[101.8359375,94.7734375],[96.26953125,94.7734375],[92.23828125,94.90625],[89.94921875,94.96484375],[88.234375,95.04296875],[88.03515625,95.08984375],[89.6015625,95.4296875],[94.75,96.640625],[107.55859375,98.640625],[123.6171875,100.09375],[135.5546875,100.734375],[141.140625,101.03515625],[142.2578125,101.08984375]]
}

export default function App() {
  const $svg = useRef(null);
  const handle = (evn) => $svg.current?.clear();
  return (
    <>
      <Signature
        ref={$svg}
        defaultPoints={points}
        options={{
          size: 6,
        }}
        renderPath={(path, keyName) => {
            return (
              <>
                <path
                  d={path}
                  strokeWidth="3"
                  stroke="blue"
                  fill="transparent"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  pointerEvents="all"
                />
                <path
                  d={path}
                  strokeWidth="0"
                  stroke="transparent"
                  fill="#dadada"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  pointerEvents="all"
                />
              </>
            )
        }}
      />
      <button onClick={handle}>Clear</button>
    </>
  );
}
```

## Props

```ts
import React from 'react';
import { type StrokeOptions } from 'perfect-freehand';
import { type Dispatch } from '@uiw/react-signature';
export interface SignatureProps extends React.SVGProps<SVGSVGElement> {
  prefixCls?: string;
  options?: StrokeOptions;
  readonly?: boolean;
  defaultPoints?: Record<string, number[][]>;
  renderPath?: (d: string, keyName: string, point: number[][], index: number) => JSX.Element;
  onPointer?: (points: number[][]) => void;
}
export type SignatureRef = {
  svg: SVGSVGElement | null;
  dispatch: Dispatch;
  clear: () => void;
};
export default function Signature(props?: SignatureProps): React.JSX.Element;
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