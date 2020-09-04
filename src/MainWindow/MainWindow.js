import React from "react";
import Accordion from "../Accordion";
import Stock from "./Stock";
import AddStock from "./AddStock";
import Strategy from "./Strategy";
import ApiContext from "../ApiContext";
import AddStrategy from "./AddStrategy";

export default class MainWindow extends React.Component {
  static contextType = ApiContext;

  render() {
    const { stocks, strategies } = this.context;

    return (
      <div className="light window strategies main">
        <h1>Strategies</h1>
        <Accordion color="yellow window">
          {strategies.map((strategy) => (
            <Strategy key={strategy.id} label={strategy.title}>
              <Accordion color="blue window">
                {stocks
                  .filter((stock) => strategy.stocks.includes(stock.id))
                  .map((stock) => (
                    <Stock
                      key={stock.id}
                      label={stock.ticker + " - " + stock.shares + " shares"}
                    ></Stock>
                  ))}
              </Accordion>
              <AddStock></AddStock>
            </Strategy>
          ))}
        </Accordion>
        <AddStrategy label="add new strategy"></AddStrategy>
      </div>
    );
  }
}
