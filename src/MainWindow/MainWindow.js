import React from "react";
import Accordion from "../Accordion";
import Stock from "./Stock";
import AddStock from "./AddStock";
import Strategy from "./Strategy";
import ApiContext from "../ApiContext";
// import { findStock, findStrategy } from "../helpers";

export default class MainWindow extends React.Component {
  static contextType = ApiContext;

  render() {
    const { stocks, strategies } = this.context;
    console.log("MainWindow -> render -> stocks", stocks);
    // const { stockId } = this.props.match.params;
    // const stock = findStock(stocks, stockId) || {};
    // const strategy = findStrategy(strategies, strategy.id);

    return (
      <div className="light window strategies main">
        <h1>Strategies</h1>

        <Accordion color="yellow window strategy">
          <Strategy label="Strategy 1">
            <Accordion color="blue window">
              <Stock label="MSFT - 10 shares">
                <AddStock label="testing"></AddStock>
              </Stock>
              <Stock label="MSFT - 20 shares">
                <AddStock label="testing"></AddStock>
              </Stock>
              <Stock label="MSFT - 30 shares">
                <AddStock label="testing"></AddStock>
              </Stock>
              <Stock label="MSFT - 40 shares">
                <AddStock label="testing"></AddStock>
              </Stock>
            </Accordion>
          </Strategy>

          <Strategy label="Strategy 2">
            <Accordion>
              <Stock label={stocks.ticker} key={stocks.id}></Stock>
              <Stock label="Add Stock"></Stock>
              <AddStock></AddStock>
            </Accordion>
          </Strategy>
        </Accordion>
      </div>
    );
  }
}
