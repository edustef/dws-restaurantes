import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function BaseLayout({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  let theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
