import React, { useReducer, forwardRef, useEffect } from 'react';
import { type StrokeOptions } from 'perfect-freehand';
import { PointerContext, PointerDispatchContext, reducer } from './store';
import { OptionContext, OptionDispatchContext, reducerOption, defaultOptions } from './options';
import { Signature as Container } from './Signature';
import { Paths } from './Paths';

export * from 'perfect-freehand';
export * from './utils';
export * from './options';

export interface SignatureProps extends React.SVGProps<SVGSVGElement> {
  prefixCls?: string;
  options?: StrokeOptions;
  readonly?: boolean;
  defaultPoints?: Record<string, number[][]>;
  onPointer?: (points: number[][]) => void;
}

const Signature = forwardRef<SVGSVGElement, SignatureProps>(({ children, options, defaultPoints, ...props }, ref) => {
  const [state, dispatch] = useReducer(reducer, Object.assign({}, defaultPoints));
  const [stateOption, dispatchOption] = useReducer(reducerOption, Object.assign({ ...defaultOptions }, options));
  useEffect(() => dispatchOption({ ...options }), [options]);
  return (
    <PointerContext.Provider value={state}>
      <PointerDispatchContext.Provider value={dispatch}>
        <Container {...props} ref={ref}>
          <OptionContext.Provider value={stateOption}>
            <OptionDispatchContext.Provider value={dispatchOption}>
              <Paths />
            </OptionDispatchContext.Provider>
          </OptionContext.Provider>
          {children}
        </Container>
      </PointerDispatchContext.Provider>
    </PointerContext.Provider>
  );
});

export default Signature;