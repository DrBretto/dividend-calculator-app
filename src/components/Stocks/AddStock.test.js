import React from "react";
import ReactDOM from "react-dom";
import AddStock from "./AddStock";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddStock />, div);
});
