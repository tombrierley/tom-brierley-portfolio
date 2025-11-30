'use client'

import React, {
  useReducer,
  ReactNode,
  FunctionComponent,
  createContext,
  Dispatch,
} from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../theme/main';
import GlobalStyle from '../theme/GlobalStyle';

type ProviderProps = {
  children: ReactNode;
};

type Action = { type: 'SET_DARK_MODE'; payload: boolean };

type InitialState = {
  darkMode: boolean;
};

const initialState = {
  darkMode: false,
};

type InitialContext = {
  state: InitialState;
  dispatch: Dispatch<Action>;
};

const initialContext: InitialContext = {
  state: initialState,
  dispatch: () => {},
};

const ThemeContext = createContext(initialContext);

export const ThemeColorProvider: FunctionComponent<ProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    (currentState: InitialState, action: Action) => {
      switch (action.type) {
        case 'SET_DARK_MODE':
          return { ...currentState, darkMode: action.payload };
        default:
          throw new Error();
      }
    },
    initialState,
  );

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
