import React from "react";
import StrategyAccordion from "./StrategyAccordion";
import Accordion from "../Accordion";
import Stock from "./Stock";
import AddStock from "./AddStock";
import Strategy from "./Strategy";

export default class MainWindow extends React.Component {
  render() {
    return (
      <div className="light window strategies main">
        <h1>Strategies</h1>

        <Accordion>
          <Strategy label="Strategy 1">
            <Stock label="MSFT - 10 shares"></Stock>
            <Stock label="MSFT - 20 shares"></Stock>
            <Stock label="MSFT - 30 shares"></Stock>
            <Stock label="MSFT - 40 shares"></Stock>
            <AddStock label="testing"></AddStock>
          </Strategy>

          <Strategy label="Alligator Sinensis">
            <Accordion>
            <Stock label="MSFT - 10 shares"></Stock>
            <Stock label="MSFT - 20 shares"></Stock>
            <Stock label="MSFT - 30 shares"></Stock>
            <Stock label="MSFT - 40 shares"></Stock>
            <Stock label="Add Stock"></Stock>
            <AddStock></AddStock>
            </Accordion>
          </Strategy>
        </Accordion>
      </div>
    );
  }
}
