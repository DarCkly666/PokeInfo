import React, { createContext, useState } from "react";

interface IThemeContext {
  theme: string;
  setTheme: any;
  navColor: string;
  setNavColor: any;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("ligth");
  const [navColor, setNavColor] = useState("#4169e1");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, navColor, setNavColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
