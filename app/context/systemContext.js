"use client";

import { createContext, useContext, useState, useEffect } from "react";

const systemContext = createContext({});

export const useSystem = () => useContext(systemContext);

export const SystemContextProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <systemContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </systemContext.Provider>
  );
};
