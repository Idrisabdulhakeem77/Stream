// import axios from "axios";
// import React, {
//   useEffect,
//   useState,
//   createContext,
//   useContext,
//   useCallback,
// } from "react";
// import { Animes } from "./shared/types";

// interface ContextProviderProps {
//   children: React.ReactNode;
// }

// export const AppContext = createContext([]);

// export const AppProvider = ({ children }: ContextProviderProps) => {
//   const [animes, setAnimes] = useState<any>([]);
//   const [loading, setLoading] = useState(false);
//   const [searchInput, setSearchInput] = useState("naruto");

//   const fetchSearchAnimes = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = (
//         await axios.get(`https://api.jikan.moe/v4/anime?q=${searchInput}`)
//       ).data;

//       const { data } = response;

//       if (data) {
//         setAnimes(data);
//       } else {
//         setAnimes([]);
//       }

//       setLoading(false);

//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }, [searchInput]);

//   useEffect(() => {
//     fetchSearchAnimes();
//   }, [fetchSearchAnimes, searchInput]);

//   return <AppContext.Provider value={{animes}}>{children}</AppContext.Provider>;
// };

// export const useGlobalState = () => {
//   return useContext(AppContext);
// };

// import React, { useState, createContext } from 'react'

// type AuthUser = {
//   name: string
//   email: string
// }

// type UserContextType = {
//   user: AuthUser | null
//   setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
//   tryFetch : () => void
// }

// type UserContextProviderProps = {
//   children: React.ReactNode
// }

// // export const UserContext = createContext<UserContextType | null>(null)
// export const UserContext = createContext({} as UserContextType)

// const tryFetch = () => {
//    return
// }

// export const UserContextProvider = ({ children }: UserContextProviderProps) => {
//   const [user, setUser] = useState<AuthUser | null>(null)
//   return (
//     <UserContext.Provider value={{ user, setUser , tryFetch  }}>
//       {children}
//     </UserContext.Provider>
//   )
// }

import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import axios from "axios";

interface SearchContextType {
    fetchSearchAnimes : () => void
}

interface SearchContextProviderProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchContextType | null>(null)

export const SearchProvider = ({ children }: SearchContextProviderProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [animes, setAnimes] = useState([]);

  const fetchSearchAnimes = useCallback(async () => {
    setLoading(true);
    try {
      const response = (
        await axios.get(`https://api.jikan.moe/v4/anime?q=${searchInput}`)
      ).data;

      const { data } = response;

      if (data) {
        setAnimes(data);
      } else {
        setAnimes([]);
      }

      setLoading(false);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, [searchInput]);

  return (
    <SearchContext.Provider value={{fetchSearchAnimes}}>{children}</SearchContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SearchContext);
};
