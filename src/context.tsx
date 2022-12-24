import { createContext, useContext } from "react";

const AppContext = createContext("");

export const AppProvider = () => {};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
