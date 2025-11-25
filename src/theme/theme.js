import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      //   main: "#1976d2",
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
    },
    secondary: {
      main: "#dc004e",
    },
    limeGreen: {
      main: "#00FF00",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
