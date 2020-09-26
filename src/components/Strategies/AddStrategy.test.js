import React from "react";
import ReactDOM from "react-dom";
import AddStrategy from "./AddStrategy";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddStrategy />, div);
});
