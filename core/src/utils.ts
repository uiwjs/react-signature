import { type StrokeOptions } from 'perfect-freehand';

/**
 * Turn the points returned from perfect-freehand into SVG path data.
 */
export function getSvgPathFromStroke(stroke: number[][]) {
  if (!stroke.length) return '';
  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ['M', ...stroke[0], 'Q'],
  );

  d.push('Z');
  return d.join(' ');
}

export const defaultOptions: StrokeOptions = {
  size: 6,
  smoothing: 0.46,
  thinning: 0.73,
  streamline: 0.5,
  easing: (t) => t,
  start: {
    taper: 0,
    easing: (t) => t,
    cap: true,
  },
  end: {
    taper: 0,
    easing: (t) => t,
    cap: true,
  },
};

export const getBoundingClientRect = (el: SVGSVGElement | null) => {
  const rect = el?.getBoundingClientRect();
  const offsetX = rect?.left || 0;
  const offsetY = rect?.top || 0;
  return { offsetX, offsetY };
};

export const getClinetXY = (e: MouseEvent | TouchEvent) => {
  const { clientX, clientY } = e.type === 'touchmove' ? (e as TouchEvent).touches[0] : (e as MouseEvent);
  return { clientX, clientY };
};

export const defaultStyle: React.CSSProperties = {
  '--w-signature-background': '#fff',
  touchAction: 'none',
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--w-signature-background)',
} as React.CSSProperties;
