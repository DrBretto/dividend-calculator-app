import React from "react";
import StrategyAccordion from "./StrategyAccordion";

export default class MainWindow extends React.Component {
  render() {
    return (
      <div className="light window strategies main">
        <h2 className="dark">Strategies</h2>
        <StrategyAccordion></StrategyAccordion>
      </div>
    );
  }
}
