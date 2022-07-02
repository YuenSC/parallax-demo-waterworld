import { createContext, useContext } from "react";

type GameDetailContextType = {
  gameName?: string;
  isIndoor?: boolean;
};

export const GameDetailContext = createContext<GameDetailContextType>({});

export const useGameDetailContext = () => {
  return useContext(GameDetailContext);
};

export const GameDetailContextProvider = GameDetailContext.Provider;
