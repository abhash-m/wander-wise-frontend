import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  


  useEffect(() => {
    if (token) {
      localStorage.setItem("theme", token);
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme]);


  const changeTheme = (value) => {
    setTheme(value)
  }


  return (
    <ThemeContext.Provider value={{ theme, changeTheme, }}>
      {children}
    </ThemeContext.Provider>
  );
};

