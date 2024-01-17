import React, { useEffect, useRef, useId, forwardRef, useImperativeHandle } from 'react';
import { getBoundingClientRect, getClinetXY, defaultStyle, useEvent } from './utils';
import { useDispatch } from './store';
import { SignatureRef, SignatureProps } from './';

export const Signature = forwardRef<SignatureRef, Omit<SignatureProps, 'defaultPoints' | 'renderPath' | 'options'>>(
  (props, ref) => {
    const { className, prefixCls = 'w-signature', style, readonly = false, onPointer, children, ...others } = props;
    const cls = [className, prefixCls].filter(Boolean).join(' ');
    const $svg = useRef<SVGSVGElement>(null);
    const $path = useRef<SVGPathElement>();
    const pointsRef = useRef<number[][]>();
    const pointCount = useRef<number>(0);
    const pointId = useId();
    const dispatch = useDispatch();
    useImperativeHandle<SignatureRef, SignatureRef>(
      ref,
      () => ({ svg: $svg.current, dispatch, clear: () => dispatch({}) }),
      [$svg.current, dispatch],
    );

    const handlePointerDown = useEvent<PointerEvent>((e) => {
      if (readonly) return;
      pointCount.current += 1;
      const { offsetY, offsetX } = getBoundingClientRect($svg.current);
      const evn = e as unknown as React.PointerEvent<SVGSVGElement>;
      const clientX = evn.clientX || evn.nativeEvent.clientX;
      const clientY = evn.clientY || evn.nativeEvent.clientY;
      pointsRef.current = [[clientX - offsetX, clientY - offsetY]];
      const pathElm = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      $path.current = pathElm;
      $svg.current!.appendChild(pathElm);
      dispatch({
        [pointId + pointCount.current]: pointsRef.current,
      });
      document.addEventListener('pointermove', handlePointerMove);
    });

    const handlePointerMove = useEvent((e: PointerEvent) => {
      if ($path.current) {
        const { offsetY, offsetX } = getBoundingClientRect($svg.current);
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
      document.removeEventListener('pointermove', handlePointerMove);
    });

    useEffect(() => {
      document.addEventListener('pointerup', handlePointerUp);
      $svg.current?.addEventListener('pointerdown', handlePointerDown);
      return () => {
        document.removeEventListener('pointerup', handlePointerUp);
        $svg.current?.removeEventListener('pointerdown', handlePointerDown);
      };
    }, []);

    const svgStyle: React.CSSProperties = { ...defaultStyle, ...style };

    return (
      <svg {...others} ref={$svg} className={cls} style={svgStyle}>
        {children}
      </svg>
    );
  },
);
