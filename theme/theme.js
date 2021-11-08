import { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#918CFF",
    },
    background: {
      default: "#B8B5FF",
      container: "#FFFFFF",
      input: "#fafafa",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
    button: {
      primary: "#24C7ED",
      secondary: "#6BE0FB",
    },
  },
  typography: {
    body1: {
      color: "#000000",
    },
    body2: {
      color: "#000000",
    },
  },
  footer: {
    color: "#918CFF",
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#110c79",
    },
    background: {
      default: "#141E61",
      container: "#110c79",
      input: "#061a54", //061a54
    },
    text: { primary: "#FFFFFF", secondary: "#FFFFFF" },
    button: {
      primary: "#22439b",
      secondary: "#2950b7",
      text: "#fafafa",
    },
  },
  typography: {
    body1: {
      color: "#FFFFFF",
    },
    body2: {
      color: "#FFFFFF",
    },
    fontWeightBold: 600,
  },
  footer: {
    color: "#110c79",
  },
});

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [localStorageTheme, setLocalStorageTheme] = useState("dark");

  if (typeof window !== "undefined") {
    const localStorage = window.localStorage;

    useEffect(() => {
      if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "dark");
      }
      const timer = setInterval(() => {
        setLocalStorageTheme(localStorage.getItem("theme"));
      }, 300);

      return () => clearInterval(timer);
    }, []);

    useEffect(() => {
      if (localStorage.getItem("theme") !== theme) {
        setTheme(
          localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
        );
      }
    }),
      [localStorageTheme];
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
