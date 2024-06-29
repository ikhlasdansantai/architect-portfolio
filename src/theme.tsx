import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5313CA",
    },
    secondary: {
      main: "#FF9963",
    },
    ascent: {
      main: "#75F1F1",
      dark: "#050729",
    },
    action: {
      hover: "#EDEEF2",
      active: "#EDEEF2",
    },
    background: {
      default: "#fff",
      paper: "#EDEEF2",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      smallPhone: 350,
      sm: 600,
      md: 860,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: 84,
    },
  },
});

export default responsiveFontSizes(theme);
