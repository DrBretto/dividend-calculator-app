import React, { Component } from "react";

const ApiContext = React.createContext({
  stocks: [],
  strategies: [],
  setError: () => {},
  clearError: () => {},
  setStrategies: () => {},
  setStocks: () => {},
});

export default ApiContext;

export class ApiProvider extends Component {
  state = {
    strategies: [],
    stocks: [],
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setStrategies = (strategies) => {
    this.setState({ strategies });
  };

  setStocks = (stocks) => {
    this.setState({ stocks });
  };

  handleAddFolder = (strategy) => {
    this.setState({
      strategies: [...this.context.strategies, strategy],
    });
  };

  handleAddStrategy = (strategy) => {
    this.setState({
      strategies: [...this.context.strategies, strategy],
    });
  };

  handleAddStock = (stock) => {
    this.setState({
      stocks: [...this.context.stocks, stock],
    });
  };

  handleDeleteStock = (stockId) => {
    console.log(
      "App -> handleDeleteStock -> this.context.stocks",
      this.context.stocks
    );
    this.setState({
      stocks: this.context.stocks.filter(
        (stock) => stock.stocks_id !== stockId
      ),
    });
  };

  handleDeleteStrategy = (stockId) => {
    console.log(
      "App -> handleDeleteStock -> this.context.stocks",
      this.context.stocks
    );
    this.setState({
      stocks: this.context.stocks.filter(
        (stock) => stock.stocks_id !== stockId
      ),
    });
  };

  render() {
    const value = {
      stocks: this.state.stocks,
      strategies: this.state.strategies,
      setError: this.setError,
      clearError: this.clearError,
      setStrategies: this.setStrategies,
      setStocks: this.setStocks,
    };
    console.log("ApiProvider -> render -> value", value);

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
