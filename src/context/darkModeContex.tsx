import React, {
  createContext,
  Dispatch,
  FC,
  ReactComponentElement,
  useReducer,
} from "react";
import DarkModeReducer from "./darkModeReducer";
import { IAction } from "./darkModeReducer";

export type DarkModeStateType = {
  darkMode: boolean;
  dispatch?: any;
};

const INITIAL_STATE: DarkModeStateType = {
  darkMode: true,
  dispatch: () => {},
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
