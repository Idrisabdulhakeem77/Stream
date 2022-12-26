import { createContext , useState } from "react";


interface AppContextProps {
    isSignedIn : boolean ,
    setIsSignedIn : any 
}

export const AppContext = createContext <AppContextProps>({} as AppContextProps);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {

    const [isSignedIn, setIsSignedIn] = useState(
        Number(localStorage.getItem("isSignedIn")) ? true : false
      );
  return (
      <AppContext.Provider value={{isSignedIn , setIsSignedIn}}>
         {  children }
      </AppContext.Provider>
  )
};
