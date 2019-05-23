import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { authReducer, initialState } from '../reducers/authReducer';

const Context = createContext<any>({});

export const AuthProvider = (props: { children: ReactNode }) => {
  const reducer = useReducer(authReducer, initialState);
  return <Context.Provider value={reducer}>{props.children}</Context.Provider>;
};

export const useAuthContext = () => useContext(Context);
