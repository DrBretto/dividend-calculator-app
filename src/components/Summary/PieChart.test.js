import React from "react";
import ReactDOM from "react-dom";
import PieChart from "./PieChart";

const data = [
  {
    name: "test",
    value: 10,
    color: "C0FFEE",
  },
  {
    name: "test2",
    value: 10,
    color: "C0FF00",
  },
];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <div width="10px" height="10px">
      <PieChart data={data} />
    </div>,
    div
  );
});
