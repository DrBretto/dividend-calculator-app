import React from "react";
import ReactDOM from "react-dom";

import Stock from "./Stock";

const stock = {
  id: 9,
  ticker: "MSFT",
  industry: "Technology",
  shares: 40,
  price: 280.51,
  eps1: 1.15,
  color: "000000",
  yield: 5.18,
  strategy_id: 1,
  author_id: "$2a$12$nWn9FFfvnRYRPeV7nWej.uGITxh347TMwIicz0Y9CkOPvTexO.HM6",
  date_published: "2020-10-04T19:24:45.923Z",
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Stock stock={stock} />, div);
});
