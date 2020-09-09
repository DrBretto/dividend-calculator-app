import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from './ApiContext'

ReactDOM.render(
  <BrowserRouter>
  <ApiProvider>
    <App />
    </ApiProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
