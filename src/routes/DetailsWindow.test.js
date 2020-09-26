import React from "react";
import ReactDOM from "react-dom";
import DetailsWindow from "./DetailsWindow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DetailsWindow />, div);
});
