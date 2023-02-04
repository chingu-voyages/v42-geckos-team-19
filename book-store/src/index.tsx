import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/rootReducer";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/400-italic.css";


const theme = extendTheme({
  fonts: {
    fontFamily1: `'Libre Baskerville', sans-serif`,
    fontFamily2: `'Poppins', sans-serif`,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </>
);
