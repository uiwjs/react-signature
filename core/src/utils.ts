import { useCallback, useEffect, useRef } from 'react';

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

export const getBoundingClientRect = <T extends Element>(el: T | null) => {
  const rect = el?.getBoundingClientRect();
  const offsetX = rect?.left || 0;
  const offsetY = rect?.top || 0;
  return { offsetX, offsetY };
};

export const getClinetXY = ({ clientX, clientY }: PointerEvent) => {
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

// Saves incoming handler to the ref in order to avoid "useCallback hell"
export function useEvent<K>(handler?: (event: K) => void): (event: K) => void {
  const callbackRef = useRef(handler);

  useEffect(() => {
    callbackRef.current = handler;
  });

  return useCallback((event: K) => callbackRef.current && callbackRef.current(event), []);
}
