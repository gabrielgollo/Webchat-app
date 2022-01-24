import { createTheme } from "@mui/material";

export default createTheme({
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
      fontWeightBold: 600,
    },
    footer: {
      color: "#918CFF",
    },
  });