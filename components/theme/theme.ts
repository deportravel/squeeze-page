import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  // eslint-disable-next-line
  interface TypeText {
    contrast: string;
  }
}

const theme = {
  palette: {
    primary: {
      main: "rgb(249, 46, 42)",
    },
    secondary: {
      main: "rgb(134, 132, 132)",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      contrast: "#fff",
    },
  },
  typography: {
    fontFamily: ['"Nunito Sans"', "sans-serif"].join(","),
    fontSize: 16,
    h1: {
      fontSize: 36,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 28,
    },
    button: {
      fontWeight: "bold",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        // @todo: figure out how to change the border color when active
        // root: {
        //   "&$focused $notchedOutline": {
        //     borderColor: "green",
        //     borderWidth: 2,
        //   },
        // },
        focused: {},
        notchedOutline: {
          borderColor: "secondary.main",
        },
      },
    },
  },
};

const muiTheme = createTheme(theme);

export default muiTheme;
