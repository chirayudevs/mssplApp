import React, {createContext, useReducer} from 'react'

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, initialState);

  return (
    <GlobalContext.Provider
      value={{authState, authDispatch}}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalProvider;
