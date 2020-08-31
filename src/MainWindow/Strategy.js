import React from "react";
import StockAccordion from "./StockAccordion";

export default class Strategy extends React.Component {
  render() {
    return (
      <div className="light window strategy">
        <h3 className="light window">{this.props.title}</h3>
        <StockAccordion />
      </div>
    );
  }
}
