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
      <div className="light window main">
        <h2 className="dark">Strategies</h2>
      {!this.context.loggedIn && (
        <div className="dark window">
          Please Log in to see strategies
          </div>

      )}

        {this.context.loggedIn && (
          <div>
            <Accordion color="yellow window">
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
