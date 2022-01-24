import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./darkTheme"
import lightTheme from "./lightTheme";
import { getCookies, setCookie } from "../src/utils/cookies";

const Theme = ({ children }) => {
  const [cachedTheme, setCachedTheme] = useState(darkTheme);



  useEffect(() => {
    const interval = setInterval(() => {
      const themeCookie = getCookies("theme");
      if (!themeCookie) {
        setCookie("theme", "light");
        setCachedTheme(lightTheme);
        return;
      }
      setCachedTheme(themeCookie === "light" ? lightTheme : darkTheme);

    }, 300);

    return () => clearInterval(interval);
  }, []);

  return <ThemeProvider theme={cachedTheme}>{children}</ThemeProvider>;
}

export default Theme;
