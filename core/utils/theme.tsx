import { createTheme } from "@mui/material/styles";

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#DB202C",
    },
    secondary: {
      main: "#AE2F37",
    },
  },
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export { lightTheme, darkTheme };
