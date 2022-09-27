import { red } from '@mui/material/colors';
import { createTheme as createMuiTheme, ThemeOptions, Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export const theme: ThemeOptions = createMuiTheme({
  palette: {
    primary: {
      main: '#090909',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#F4F6FF',
      contrastText: '#090909',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#E5E5E5',
    },
  },
  spacing: 4,
  typography: {
    fontSize: 14,
    h1: {
      fontSize: 18,
    },
    h2: {
      fontSize: 16,
    },
  },
});
