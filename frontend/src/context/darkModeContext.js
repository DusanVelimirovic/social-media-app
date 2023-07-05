import { createContext, useEffect, useState } from "react";

// Create Context
export const DarkModeContext = createContext();

// Create Context Provider for whole application
export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  // Toggle Dark Mode value
  const toggle = () => {
    setDarkMode(!darkMode);
  };

  // Initial localStorage with Dark Mode value
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
