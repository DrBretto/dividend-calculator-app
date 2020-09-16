import React from "react";

import Accordion from "../components/Accordion/Accordion";
import Stock from "../components/Stocks/Stock";
import AddStock from "../components/Stocks/AddStock";
import Strategy from "../components/Strategies/Strategy";
import AddStrategy from "../components/Strategies/AddStrategy";

import Context from "../contexts/ApiContext";
import ApiService from "../services/api-service";

export default class MainWindow extends React.Component {
  static contextType = Context;

  componentDidMount() {
    ApiService.getStrategies()
      .then((res) => {
        this.context.setStrategies(res);
      })
      .catch(this.context.setError);
    ApiService.getStocks()
      .then((res) => {
        this.context.setStocks(res);
      })
      .catch(this.context.setError);
  }

  render() {
    const { stocks, strategies } = this.context;

    return (
      <div className="light main window strategies">
        <h2 className="dark">Strategies</h2>
        {!this.context.loggedIn && (
          <div className="dark window">Please Log in to see strategies</div>
        )}

        {this.context.loggedIn && (
          <div className="strategiesWindow">
            <Accordion color="green window accordion">
              {strategies.map((strategy) => (
                <Strategy key={strategy.id} label={strategy.title}>
                  {stocks
                    .filter((stock) => stock.strategy_id === strategy.id)
                    .map((stock) => (
                      <Stock key={stock.id} stock={stock}></Stock>
                    ))}
                  <AddStock strategy_id={strategy.id}></AddStock>
                </Strategy>
              ))}
            </Accordion>
            <AddStrategy label="add new strategy"></AddStrategy>
          </div>
        )}
      </div>
    );
  }
}
