import React, { createContext, useState, useContext } from 'react';

// Create context
const AppContext = createContext();

// Custom hook to use context
export const useAppContext = () => useContext(AppContext);

// Context Provider component
export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider value={{ darkMode, isSidebarOpen, toggleDarkMode, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};
