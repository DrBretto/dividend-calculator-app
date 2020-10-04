import React from "react";
import ReactDOM from "react-dom";
import SummaryPanel from "./SummaryPanel";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SummaryPanel />, div);
});
