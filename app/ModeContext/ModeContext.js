"use client";
import React from "react";

const ModeContext = React.createContext();
const ModeProvider = ({ children }) => {
  const [mode, setMode] = React.useState("light");
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;

export const useMode = () => React.useContext(ModeContext);
