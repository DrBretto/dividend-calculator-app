import React from "react";
import ReactDOM from "react-dom";

import ColorPicker from "./ColorPicker";

const color = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ColorPicker color={color} />, div);
});
