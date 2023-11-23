import React, { useEffect, useRef } from 'react';
import { getStroke, type StrokeOptions } from 'perfect-freehand';
import { getSvgPathFromStroke, getBoundingClientRect, getClinetXY, defaultOptions, defaultStyle } from './utils';

export interface SignatureProps extends React.SVGProps<SVGSVGElement> {
  prefixCls?: string;
  options?: StrokeOptions;
}

let points: number[][] = [];
export default function Signature(props: SignatureProps = {}) {
  const { className, prefixCls = 'w-signature', style, options, ...others } = props;
  const cls = [className, prefixCls].filter(Boolean).join(' ');
  const $svg = useRef<SVGSVGElement>(null);
  const $path = useRef<SVGPathElement>();

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const { offsetY, offsetX } = getBoundingClientRect($svg.current);
    const clientX = e.clientX || e.nativeEvent.clientX;
    const clientY = e.clientY || e.nativeEvent.clientY;
    points = [[clientX - offsetX, clientY - offsetY]];
    const pathElm = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    $path.current = pathElm;
    $svg.current!.appendChild(pathElm);
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if ($path.current) {
      const { offsetY, offsetX } = getBoundingClientRect($svg.current);
      const { clientX, clientY } = getClinetXY(e);
      points = [...points, [clientX - offsetX, clientY - offsetY]];
      const stroke = getStroke(points, { ...defaultOptions, ...options });
      const pathData = getSvgPathFromStroke(stroke);
      $path.current?.setAttribute('d', pathData);
    }
  };

  const handleMouseUp = () => {
    points = [];
    $path.current = undefined;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <svg
      {...others}
      ref={$svg}
      className={cls}
      onPointerDown={handleMouseDown}
      // onPointerMove={handlePointerMove}
      style={{ ...defaultStyle, ...style }}
    />
  );
}
