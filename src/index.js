import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./contexts/ApiContext";

ReactDOM.render(
  <BrowserRouter>
    <ApiProvider>
      <App />
    </ApiProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
