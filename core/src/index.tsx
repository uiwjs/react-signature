import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { getStroke, type StrokeOptions } from 'perfect-freehand';
import { getSvgPathFromStroke, getBoundingClientRect, getClinetXY, defaultOptions, defaultStyle } from './utils';

export * from './utils';

export interface SignatureProps extends React.SVGProps<SVGSVGElement> {
  prefixCls?: string;
  options?: StrokeOptions;
  onPointer?: (points: number[][]) => void;
}

let points: number[][] = [];

const Signature = forwardRef<SVGSVGElement, SignatureProps>((props, ref) => {
  const { className, prefixCls = 'w-signature', style, onPointer, options, ...others } = props;
  const cls = [className, prefixCls].filter(Boolean).join(' ');
  const $svg = useRef<SVGSVGElement>(null);
  const $path = useRef<SVGPathElement>();

  useImperativeHandle<SVGSVGElement | null, SVGSVGElement | null>(ref, () => $svg.current, [$svg.current]);

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    const { offsetY, offsetX } = getBoundingClientRect($svg.current);
    const clientX = e.clientX || e.nativeEvent.clientX;
    const clientY = e.clientY || e.nativeEvent.clientY;
    points = [[clientX - offsetX, clientY - offsetY]];
    const pathElm = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    $path.current = pathElm;
    $svg.current!.appendChild(pathElm);
    // $svg.current?.remove()
  };

  const handlePointerMove = (e: PointerEvent) => {
    if ($path.current) {
      const { offsetY, offsetX } = getBoundingClientRect($svg.current);
      const { clientX, clientY } = getClinetXY(e);
      points = [...points, [clientX - offsetX, clientY - offsetY]];
      const stroke = getStroke(points, { ...defaultOptions, ...options });
      const pathData = getSvgPathFromStroke(stroke);
      $path.current?.setAttribute('d', pathData);
    }
  };

  const handlePointerUp = () => {
    onPointer && onPointer(points);
    points = [];
    $path.current = undefined;
  };

  useEffect(() => {
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <svg
      {...others}
      ref={$svg}
      className={cls}
      onPointerDown={handlePointerDown}
      style={{ ...defaultStyle, ...style }}
    />
  );
});

export default Signature;
