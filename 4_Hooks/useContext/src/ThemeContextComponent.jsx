import React from 'react';
import { useTheme } from './ThemeContext'; // Import the custom hook
import "../src/theme.css"
import Counter from './Counter';
const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <p>Seizure Warning</p>
      <button onClick={toggleTheme} className={theme === 'light' ? 'dark-mode' : 'light-mode'}>
        Toggle Theme
      </button>
      <Counter/>
    </div>
  );
};

export default ThemedComponent;
