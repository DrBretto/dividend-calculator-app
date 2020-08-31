import React from "react";
import Stock from "./Stock";
import AddStock from "./AddStock";

export default class StockAccordion extends React.Component {
  render() {
    return (
      <div className="stock accordion">
        <Stock title="MSFT - 10 Shares" className="closed" />
        <div className="blue window stock">
          <h4>Add New Stock:</h4>
          <AddStock></AddStock>
        </div>
      </div>
    );
  }
}
