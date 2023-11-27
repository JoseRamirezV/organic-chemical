import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: '#858585',
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
