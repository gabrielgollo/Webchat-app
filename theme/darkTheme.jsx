import { createTheme } from "@mui/material";

export default createTheme({
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
      text: { 
          primary: "#FFFFFF", 
          secondary: "#FFFFFF" 
        },
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