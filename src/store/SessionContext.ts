import { createContext, useContext } from 'react';

interface IThemeContext {
  session: any;
}

const defaultState = {
  session: null,
};

const SessionContext = createContext<IThemeContext>(defaultState);

export const SessionProvider = SessionContext.Provider;

export const useSessionContext = () => {
  return useContext(SessionContext);
};
