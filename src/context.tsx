import React ,  { useContext , createContext  ,  useState} from "react"


interface Theme {
    //   theme : "dark-mode" | "light-mode"
     children : React.ReactNode
}

const AppContext = createContext<string>("dark-mode")


export const AppProvider = ( { children} : Theme) => {
     <AppContext.Provider  value={"test"}>
          { children }
     </AppContext.Provider>
}



export const useGlobalContext = () => {
     return useContext(AppContext)
}