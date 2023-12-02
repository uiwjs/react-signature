declare module '@uiw/react-signature/canvas' {
  import React from 'react';
  import { type StrokeOptions } from 'perfect-freehand';
  import { type Dispatch } from '@uiw/react-signature/esm/store';
  export * from 'perfect-freehand';
  export * from '@uiw/react-signature/esm/utils';
  export * from '@uiw/react-signature/esm/options';
  export * from '@uiw/react-signature/esm/store';
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
    renderPath?: (d: string, keyName: string, point: number[][], index: number) => JSX.Element;
    onPointer?: (points: number[][]) => void;
  }
  const Signature: React.ForwardRefExoticComponent<SignatureProps & React.RefAttributes<SignatureCanvasRef>>;
  export default Signature;
}
