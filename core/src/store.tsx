import { createContext, useContext } from 'react';

export const initialState: InitialState = {};

export const PointerContext = createContext<InitialState>(initialState);
export const PointerDispatchContext = createContext<Dispatch>(() => {});

type Dispatch = React.Dispatch<InitialState>;

type InitialState = Record<string, number[][]>;

export function reducer(tasks: InitialState, action: InitialState) {
  return { ...tasks, ...action };
}

export const useStore = () => {
  return useContext(PointerContext);
};

export const useDispatch = () => {
  return useContext(PointerDispatchContext);
};
