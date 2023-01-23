import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/rootReducer";
import { ThemeProvider, createTheme } from "@mui/material";

const BookstoreTheme = createTheme({
  palette: {
    primary: {
      main: "#C4B8C6",
    },
    secondary: {
      main: "#767fa7",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={BookstoreTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </>
);
