import React, { useReducer, forwardRef, useEffect } from 'react';
import { type StrokeOptions } from 'perfect-freehand';
import { PointerContext, PointerDispatchContext, reducer, type Dispatch } from './store';
import { OptionContext, OptionDispatchContext, reducerOption, defaultOptions } from './options';
import { Signature as Container } from './Signature';
import { Paths } from './Paths';

export * from 'perfect-freehand';
export * from './utils';
export * from './options';
export * from './store';

export type SignatureRef = {
  svg: SVGSVGElement | null;
  dispatch: Dispatch;
  clear: () => void;
};

export interface SignatureProps extends React.SVGProps<SVGSVGElement> {
  prefixCls?: string;
  options?: StrokeOptions;
  readonly?: boolean;
  defaultPoints?: Record<string, number[][]>;
  renderPath?: (d: string, keyName: string, point: number[][], index: number, container: SVGSVGElement) => JSX.Element;
  onPointer?: (points: number[][]) => void;
}

const Signature = forwardRef<SignatureRef, SignatureProps>(
  ({ children, options, renderPath, defaultPoints, ...props }, ref) => {
    const [state, dispatch] = useReducer(reducer, Object.assign({}, defaultPoints));
    const [stateOption, dispatchOption] = useReducer(
      reducerOption,
      Object.assign({ ...defaultOptions, renderPath }, options),
    );
    useEffect(() => dispatchOption({ ...options, renderPath }), [options, renderPath]);
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
  },
);

export default Signature;
