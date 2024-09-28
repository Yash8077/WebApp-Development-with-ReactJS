import React, { createContext, useState, useContext } from 'react';
import ThemedComponent from './ThemeContextComponent';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Create a ThemeProvider to wrap around the app
export const ThemeProvider = () => {
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};
