import React, { useContext, createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const location = useLocation();
  const themes = [
    {
      accent: "#fd73ff",
      textColor: "#fff",
      background: "#250e8f",
      value: 0,
      id: "design",
    },

    {
      accent: "#fff",
      textColor: "#fff",
      background: "#000",
      lightBackground: "#9cb9ff",
      value: 1,
      id: "about",
    },

    {
      accent: "#fff55a",
      textColor: "#fff",
      background: "#212121",
      value: 2,
      id: "dev",
    },
  ];

  const [theme, setTheme] = useState(themes[1]);

  const setThemeFunc = (val) => {
    if(val || val === 0){
      setTheme(themes[val]);
    }
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/design":
        setThemeFunc(0);
        break;
      case "/about":
        setThemeFunc(1);
        break;
      case "/dev":
        setThemeFunc(2);
        break;
      default:
        setThemeFunc(1);
    }
  }, [location]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeFunc }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
