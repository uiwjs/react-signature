import { createContext, useContext } from 'react';
import { type StrokeOptions } from 'perfect-freehand';
import { SignatureProps } from './';

export const defaultOptions: InitialOptionState = {
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

export const OptionContext = createContext<InitialOptionState>(defaultOptions);
export const OptionDispatchContext = createContext<Dispatch>(() => {});

type Dispatch = React.Dispatch<InitialOptionState>;
type InitialOptionState = StrokeOptions & {
  renderPath?: SignatureProps['renderPath'];
  container?: HTMLElement;
};

export function reducerOption(tasks: InitialOptionState, action: InitialOptionState) {
  return { ...tasks, ...action };
}

export const useOptionStore = () => {
  return useContext(OptionContext);
};

export const useOptionDispatch = () => {
  return useContext(OptionDispatchContext);
};
