import React, { useState, useEffect } from "react";
import { useTheme } from './ThemeContext'; // Import the custom hook
import "../src/theme.css"
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count value changed: ${count}`);
  }, [count]); //dependency array

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button onClick={increment} className={theme === 'light' ? 'dark-mode' : 'light-mode'}>Increment</button>
        <button onClick={decrement} className={theme === 'light' ? 'dark-mode' : 'light-mode'}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
