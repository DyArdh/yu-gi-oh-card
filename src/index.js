import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const AnswerHere = () => (
  <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnswerHere />
  </React.StrictMode>
);
