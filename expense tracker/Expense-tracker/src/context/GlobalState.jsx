import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial object value
const initialState = {
  transactions: []
};

//context creation
export const GlobalContext = createContext(initialState);

//context provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload:id
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload:transaction
    });
  };

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions ,deleteTransaction,addTransaction}}>
      {children}
    </GlobalContext.Provider>
  );
};
