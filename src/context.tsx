import axios from "axios";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import { Animes } from "./shared/types";

interface ContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext([]);

export const AppProvider = ({ children }: ContextProviderProps) => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("naruto");

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

  useEffect(() => {
    fetchSearchAnimes();
  }, [fetchSearchAnimes, searchInput]);

  return <AppContext.Provider value={animes }>{children}</AppContext.Provider>;
};

export const useGlobalState = () => {
  return useContext(AppContext);
};
