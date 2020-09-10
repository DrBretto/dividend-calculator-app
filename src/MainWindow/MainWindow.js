import React from "react";
import Accordion from "../Accordion";
import Stock from "./Stock";
import AddStock from "./AddStock";
import Strategy from "./Strategy";
import ApiContext from "../ApiContext";
import AddStrategy from "./AddStrategy";

import ApiService from "../services/api-service";

export default class MainWindow extends React.Component {
  static contextType = ApiContext;

  componentDidMount() {
    ApiService.getStrategies()
      .then((res) => {
        console.log("MainWindow -> componentDidMount -> res", res);
        this.context.setStrategies(res);
      })
      .catch(this.context.setError);
    ApiService.getStocks()
      .then((res) => {
        console.log("MainWindow -> componentDidMount -> res", res);
        this.context.setStocks(res);
      })
      .catch(this.context.setError);
  }

  render() {
    const { stocks, strategies } = this.context;

    return (
      <div className="light window main">
        <h2 className="dark">Strategies</h2>
        <Accordion color="yellow window">
          {strategies.map((strategy) => (
            <Strategy key={strategy.id} label={strategy.title}>
              {/* <Accordion color="gray window"> */}
                {stocks.filter((stock) => stock.strategy_id === strategy.id)
                  .map((stock) => (
                  <Stock
                    key={stock.id}
                    stock={stock}
                  ></Stock>
                ))}
              {/* </Accordion> */}
              <AddStock strategy_id={strategy.id}></AddStock>
            </Strategy>
          ))}
        </Accordion>
        <AddStrategy label="add new strategy"></AddStrategy>
      </div>
    );
  }
}
