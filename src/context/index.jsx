import React, { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  return (
    <MainContext.Provider value={{ token, setToken }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
