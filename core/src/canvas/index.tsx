import React, { useReducer, forwardRef, useEffect } from 'react';
import { type StrokeOptions } from 'perfect-freehand';
import { PointerContext, PointerDispatchContext, reducer, type Dispatch } from '../store';
import { OptionContext, OptionDispatchContext, reducerOption, defaultOptions } from '../options';
import { Signature as Container } from './Signature';
import { Paths } from './Paths';

export * from 'perfect-freehand';
export * from '../utils';
export * from '../options';
export * from '../store';

export type SignatureCanvasRef = {
  canvas: HTMLCanvasElement | null;
  dispatch: Dispatch;
  clear: () => void;
};

export interface SignatureProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  prefixCls?: string;
  options?: StrokeOptions;
  readonly?: boolean;
  defaultPoints?: Record<string, number[][]>;
  onPointer?: (points: number[][]) => void;
}

const Signature = forwardRef<SignatureCanvasRef, SignatureProps>(
  ({ children, options, defaultPoints, ...props }, ref) => {
    const [state, dispatch] = useReducer(reducer, Object.assign({}, defaultPoints));
    const [stateOption, dispatchOption] = useReducer(reducerOption, Object.assign({ ...defaultOptions }, options));
    useEffect(() => dispatchOption({ ...options }), [options]);
    return (
      <PointerContext.Provider value={state}>
        <PointerDispatchContext.Provider value={dispatch}>
          <OptionContext.Provider value={stateOption}>
            <OptionDispatchContext.Provider value={dispatchOption}>
              <Container {...props} ref={ref}>
                {children}
              </Container>
              <Paths />
            </OptionDispatchContext.Provider>
          </OptionContext.Provider>
        </PointerDispatchContext.Provider>
      </PointerContext.Provider>
    );
  },
);

export default Signature;
