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
          <div className="dark window">
            <p className="dark window">Please Log in to see strategies</p>
            <p className="welcome">Welcome to my Dividend Calculator App!</p>
            <p className="description">
              This app is a tool to help you evaluate your potential dividend
              allocation. Simply navigate to{" "}
              <a href="https://www.investopedia.com/">Investopedia.com </a>
              to get the required info on the stocks you want to preview.
            </p>

            <p className="description">
              You can then create a portfolio strategy by adding stocks and
              playing around with the values and see the effects of the changes
              in realtime
            </p>

            <p className="description">
              For testing purposes, please log in with the following
              credentials:
            </p>
            <p className="description">Username: DemoUser</p>
            <p className="description">password: Passw0rd!</p>
          </div>
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
