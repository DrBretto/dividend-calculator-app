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

        <Accordion color="yellow window strategy">
          <Strategy label="Strategy 1">
            <Accordion color="blue window stock">
              <Stock label="MSFT - 10 shares"></Stock>
              <Stock label="MSFT - 20 shares"></Stock>
              <Stock label="MSFT - 30 shares"></Stock>
              <Stock label="MSFT - 40 shares"></Stock>
              <AddStock label="testing"></AddStock>
            </Accordion>
          </Strategy>

          <Strategy label="Strategy 2">
            <Stock label="MSFT - 10 shares" color="blue window"></Stock>
            <Stock label="MSFT - 20 shares"></Stock>
            <Stock label="MSFT - 30 shares"></Stock>
            <Stock label="MSFT - 40 shares"></Stock>
            <Stock label="Add Stock"></Stock>
            <AddStock></AddStock>
          </Strategy>
        </Accordion>
      </div>
    );
  }
}
