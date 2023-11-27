import { createContext, useContext } from 'react';

export const initialState: InitialState = {};

export const PointerContext = createContext<InitialState>(initialState);
export const PointerDispatchContext = createContext<Dispatch>(() => {});

export type Dispatch = React.Dispatch<InitialState>;
type InitialState = Record<string, number[][]>;

export function reducer(tasks: InitialState, action: InitialState) {
  if (action && Object.keys(action).length === 0) return initialState;
  return { ...tasks, ...action };
}

export const useStore = () => {
  return useContext(PointerContext);
};

export const useDispatch = () => {
  return useContext(PointerDispatchContext);
};
