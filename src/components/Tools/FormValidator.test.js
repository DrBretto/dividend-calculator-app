import React from "react";
import ReactDOM from "react-dom";
import FormValidator from "./FormValidator";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormValidator />, div);
});
