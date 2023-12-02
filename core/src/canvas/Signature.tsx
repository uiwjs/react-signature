import React, { useEffect, useRef, useId, forwardRef, useImperativeHandle } from 'react';
import { getBoundingClientRect, getClinetXY, useEvent } from '../utils';

import { SignatureCanvasRef, SignatureProps } from '.';
import { useDispatch } from '../store';
import { useOptionDispatch } from '../options';

export const defaultStyle: React.CSSProperties = {
  '--w-signature-background': '#fff',
  touchAction: 'none',
  position: 'relative',
  backgroundColor: 'var(--w-signature-background)',
} as React.CSSProperties;

export const Signature = forwardRef<SignatureCanvasRef, SignatureProps>((props, ref) => {
  const {
    className,
    prefixCls = 'w-signature',
    style,
    readonly = false,
    onPointer,
    options,
    children,
    ...others
  } = props;
  const cls = [className, prefixCls].filter(Boolean).join(' ');
  const $canvas = useRef<HTMLCanvasElement>(null);
  const $path = useRef<SVGPathElement>();
  const pointsRef = useRef<number[][]>();
  const pointCount = useRef<number>(0);
  const pointId = useId();
  const dispatch = useDispatch();
  const dispatchOption = useOptionDispatch();
  useImperativeHandle<SignatureCanvasRef, SignatureCanvasRef>(
    ref,
    () => ({
      canvas: $canvas.current,
      dispatch,
      clear: () => {
        dispatch({});
        const ctx = $canvas.current?.getContext('2d');
        ctx?.clearRect(0, 0, $canvas.current?.width || 0, $canvas.current?.height || 0);
      },
    }),
    [$canvas.current, dispatch],
  );

  const handlePointerDown = useEvent((e: React.PointerEvent<HTMLCanvasElement>) => {
    if (readonly) return;
    pointCount.current += 1;
    const { offsetY, offsetX } = getBoundingClientRect($canvas.current);
    const clientX = e.clientX || e.nativeEvent.clientX;
    const clientY = e.clientY || e.nativeEvent.clientY;
    pointsRef.current = [[clientX - offsetX, clientY - offsetY]];
    const pathElm = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    $path.current = pathElm;
    $canvas.current!.appendChild(pathElm);
    dispatch({
      [pointId + pointCount.current]: pointsRef.current,
    });
  });

  const handlePointerMove = useEvent((e: PointerEvent) => {
    if ($path.current) {
      const { offsetY, offsetX } = getBoundingClientRect($canvas.current);
      const { clientX, clientY } = getClinetXY(e);
      pointsRef.current = [...pointsRef.current!, [clientX - offsetX, clientY - offsetY]];
      dispatch({
        [pointId + pointCount.current]: pointsRef.current,
      });
    }
  });

  const handlePointerUp = useEvent(() => {
    let result = pointsRef.current || [];
    onPointer && props.onPointer!(result);
    $path.current = undefined;
    pointsRef.current = undefined;
  });

  useEffect(() => {
    if ($canvas.current) {
      dispatchOption({ container: $canvas.current });
    }
    if (readonly) return;
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    return () => {
      if (readonly) return;
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);
  return (
    <canvas
      {...others}
      ref={$canvas}
      className={cls}
      onPointerDown={handlePointerDown}
      style={{ ...defaultStyle, ...style }}
    >
      {children}
    </canvas>
  );
});
