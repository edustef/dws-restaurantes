import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import { Helmet } from 'react-helmet';
import CssBaseline from "@material-ui/core/CssBaseline";

export default function BaseLayout({ children, title }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  let theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: '#067a4d'
          },
          secondary: {
            main: "#27aa80"
          },
          success: {
            main: "#a4b494"
          },
        },
      }),
    [prefersDarkMode]
  );
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Helmet titleTemplate="%s | Foodware" title={title} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
