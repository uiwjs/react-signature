import { useRef, useState } from 'react';
import Signature, { defaultOptions, type StrokeOptions, type SignatureRef } from '@uiw/react-signature';
import copyTextToClipboard from '@uiw/copy-to-clipboard';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 4px;
  flex: 1;
`;

const points1 = [
  [79.51953125, 53.6640625],
  [80.234375, 53.08984375],
  [82.796875, 51.59375],
  [86.5, 50.140625],
  [90.828125, 49.328125],
  [97.3203125, 48.8671875],
  [104.25390625, 49.52734375],
  [112.109375, 52.39453125],
  [120.70703125, 58.33203125],
  [126.0234375, 66.8828125],
  [126.30859375, 80.859375],
  [121.109375, 98.12109375],
  [111.484375, 112.98046875],
  [101.30078125, 122.02734375],
  [91.9765625, 125.265625],
  [85.08203125, 125.6796875],
  [81.6640625, 124.00390625],
  [80.19921875, 120.87890625],
  [80.6953125, 115.671875],
  [84.8125, 106.984375],
  [92.9921875, 97.24609375],
  [105.1640625, 90.71875],
  [120.99609375, 87.29296875],
  [136.98046875, 87.63671875],
  [149.97265625, 90.87109375],
  [155.30078125, 94.56640625],
  [155.94921875, 99.23828125],
  [155.328125, 104.59765625],
  [151.8046875, 111.31640625],
  [146.5625, 117.6015625],
  [140.90234375, 121.62890625],
  [137.8515625, 123.453125],
  [137.328125, 123.40625],
  [136.95703125, 122.9453125],
  [137.13671875, 121.32421875],
  [140.44921875, 115.890625],
  [148.14453125, 106.15234375],
  [157.15625, 96.91796875],
  [173.70703125, 83.3203125],
  [191.55859375, 70.1015625],
  [199.70703125, 65.35546875],
  [203.46875, 63.515625],
  [204.6484375, 63.234375],
  [204.1796875, 64.6171875],
  [202.94921875, 67.875],
  [199.71875, 74.88671875],
  [192.64453125, 88.46875],
  [184.30078125, 105.28125],
  [178.7421875, 116.85546875],
  [175.46484375, 121.59765625],
  [173.140625, 122.93359375],
  [171.39453125, 122.44140625],
  [170.09765625, 119.9375],
  [169.9375, 112.65234375],
  [173.2265625, 99.640625],
  [182.1953125, 82.4453125],
  [193.19140625, 67.78515625],
  [203.48046875, 58.6953125],
  [212.25, 53.43359375],
  [219.55078125, 51.18359375],
  [224.8046875, 50.40234375],
  [227.41015625, 50.87890625],
  [229.0859375, 52.3984375],
  [230.19140625, 55.34765625],
  [231.05078125, 60.60546875],
  [231.3515625, 67.671875],
  [230.57421875, 73.42578125],
  [228.1953125, 78.00390625],
  [224.86328125, 80.7265625],
  [221.46875, 81.40234375],
  [218.390625, 79.51953125],
  [212.5859375, 72.31640625],
  [202.6640625, 61.04296875],
  [190.8125, 47.4296875],
  [182.90234375, 37.1953125],
  [180.26171875, 32.00390625],
  [179.12890625, 29.2421875],
  [179.1796875, 28.84765625],
  [179.921875, 29.28125],
  [181.41015625, 30.5234375],
  [185.00390625, 33.3671875],
  [193.6015625, 39.0859375],
  [213.0859375, 51.1328125],
  [249.11328125, 72.74609375],
  [296.953125, 102.0859375],
  [342.8203125, 130.1328125],
  [381.08984375, 152.51171875],
  [408, 167.734375],
  [419.70703125, 173.66796875],
  [422.6171875, 174.94921875],
  [423.01953125, 175.1484375],
];

const points2 = [
  [277.48828125, 62.6015625],
  [277.4453125, 62.64453125],
  [276.41015625, 64.51953125],
  [269.54296875, 74.9921875],
  [253.75, 96.70703125],
  [232.1171875, 122.76171875],
  [214.55859375, 140.99609375],
  [206.01171875, 147.85546875],
  [201.65625, 150.41015625],
  [200.0078125, 151.3125],
  [200.0078125, 151.2265625],
  [200.15625, 151.0234375],
];

const points = { points1, points2 };

export const ExampleSignature = () => {
  const $svg = useRef<SignatureRef>(null);
  const [options, setOptions] = useState<StrokeOptions>(defaultOptions);
  const handle = (evn: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    $svg.current?.clear();
  };

  const resetOption = () => setOptions(defaultOptions);
  const handleCopy = () => copyTextToClipboard(JSON.stringify(options, null, 2));
  const handleSVGCopy = () => {
    const svgelm = $svg.current?.svg?.cloneNode(true) as SVGSVGElement;
    const clientWidth = $svg.current?.svg?.clientWidth;
    const clientHeight = $svg.current?.svg?.clientHeight;
    svgelm.removeAttribute('style');
    svgelm.setAttribute('width', `${clientWidth}px`);
    svgelm.setAttribute('height', `${clientHeight}px`);
    svgelm.setAttribute('viewbox', `${clientWidth} ${clientHeight}`);
    copyTextToClipboard(svgelm.outerHTML);
  };

  return (
    <Wrapper>
      <Signature
        style={{ borderRadius: 5, height: 210, border: '1px solid var(--color-border-default, #30363d)' }}
        ref={$svg}
        options={options}
        defaultPoints={points}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.46rem' }}>
        <button onClick={handle}>Clear</button>
        <button onClick={resetOption}>Reset Options</button>
        <button onClick={handleCopy}>Copy Options</button>
        <button onClick={handleSVGCopy}>Copy to SVG</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem' }}>
        <label>
          <div>Size: {options.size}</div>
          <input
            type="range"
            value={options.size}
            max={50}
            min={1}
            onChange={(evn) => {
              setOptions({
                ...options,
                size: Number(evn.target.value),
              });
            }}
          />
        </label>
        <label>
          <div>Smoothing: {options.smoothing}</div>
          <input
            type="range"
            value={options.smoothing}
            max={0.99}
            min={-0.99}
            step={0.01}
            onChange={(evn) => {
              setOptions({
                ...options,
                smoothing: Number(evn.target.value),
              });
            }}
          />
        </label>
        <label>
          <div>Thinning: {options.thinning}</div>
          <input
            type="range"
            value={options.thinning}
            max={0.99}
            min={-0.99}
            step={0.01}
            onChange={(evn) => {
              setOptions({
                ...options,
                thinning: Number(evn.target.value),
              });
            }}
          />
        </label>
        <label>
          <div>Streamline: {options.streamline}</div>
          <input
            type="range"
            value={options.streamline}
            max={0.99}
            min={0.01}
            step={0.01}
            onChange={(evn) => {
              setOptions({
                ...options,
                streamline: Number(evn.target.value),
              });
            }}
          />
        </label>
      </div>
    </Wrapper>
  );
};
