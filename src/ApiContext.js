import React from "react";

export default React.createContext({
  stocks: [],
  strategies: [],
  addStrategy: () => {},
  addStock: () => {},
  deleteStock: () => {},
  deleteStrategy: () => {},
});
