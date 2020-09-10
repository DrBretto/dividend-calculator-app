import React, { Component } from "react";

const ApiContext = React.createContext({
  stocks: [],
  strategies: [],
  setError: () => {},
  clearError: () => {},
  setStrategies: () => {},
  clearStrategies: () => {},
  setStocks: () => {},
  clearStocks: () => {},
  addStrategy: () => {},
  addStock: () => {},
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
  
  clearStrategies = () => {
    this.setState({ strategies: [] });
  };

  setStocks = (stocks) => {
    this.setState({ stocks });
  };

  clearStocks = () => {
    this.setState({ stocks: [] });
  };

  handleAddStrategy = (strategy) => {
    console.log("ApiProvider -> handleAddStrategy -> strategy", strategy)
    console.log("ApiProvider -> handleAddStrategy -> this.context.strategies", this.state.strategies)
    this.setState({
      strategies: [...this.state.strategies, strategy],
    });
  };

  handleAddStock = (stock) => {
    this.setState({
      stocks: [...this.state.stocks, stock],
    });
  };

  handleDeleteStock = (stockId) => {
    console.log(
      "App -> handleDeleteStock -> this.state.stocks",
      this.state.stocks
    );
    this.setState({
      stocks: this.state.stocks.filter(
        (stock) => stock.stocks_id !== stockId
      ),
    });
  };

  handleDeleteStrategy = (stockId) => {
    console.log(
      "App -> handleDeleteStock -> this.state.stocks",
      this.state.stocks
    );
    this.setState({
      stocks: this.state.stocks.filter(
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
      addStrategy: this.handleAddStrategy,
      addStock: this.handleAddStock,
    };
    console.log("ApiProvider -> render -> value", value);

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
