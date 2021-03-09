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
            main: '#382933'
          },
          secondary: {
            main: "#3b5249"
          },
          success: {
            main: "#519872"
          }
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
