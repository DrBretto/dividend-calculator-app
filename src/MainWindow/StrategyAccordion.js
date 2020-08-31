import React from "react";
import Strategy from "./Strategy";

export default class StrategyAccordion extends React.Component {
  render() {
    return (
      <div className="strategyAccordion">
        <Strategy title="Strategy 1" className="light window strategy" />
        <Strategy title="Strategy 2" className="light window strategy" />
        <Strategy title="Strategy 3" className="light window strategy" />
        <Strategy title="Strategy 4" className="light window strategy" />
      </div>
    );
  }
}
