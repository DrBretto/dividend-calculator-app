import React, { Component } from "react";
import TokenService from "../services/token-service";

const ApiContext = React.createContext({
  stocks: [],
  strategies: [],
  openStocks: [],
  openStrat: {},
  loggedIn: TokenService.hasAuthToken(),
  setLogin: () => {},
  setLogout: () => {},
  setError: () => {},
  clearError: () => {},
  setStrategies: () => {},
  clearStrategies: () => {},
  setStocks: () => {},
  clearStocks: () => {},
  addStrategy: () => {},
  addStock: () => {},
  setOpenStrat: () => {},
});

export default ApiContext;

export class ApiProvider extends Component {
  state = {
    strategies: [],
    stocks: [],
    openStrat: {},
    openStocks: [],
    loggedIn: TokenService.hasAuthToken(),
    error: null,
  };

  setLogin = (bool) => {
    this.setState({
      loggedIn: bool,
      openStrat: {},
      openStocks: [],
    });
  };

  setOpenStrat = (stratName) => {
    if (stratName !== "") {
      const strat = this.state.strategies.find(
        (strategy) => strategy.title === stratName
      );
      const stocks = this.state.stocks.filter(
        (stock) => stock.strategy_id === strat.id
      );

      this.setState({
        openStocks: stocks,
        openStrat: strat,
      });
    }
    else {
      this.setState({
        openStocks: [],
        openStrat: {},
      });
    }
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
    this.setState({
      strategies: [...this.state.strategies, strategy],
    });
  };

  handleAddStock = (stock) => {
    this.setState({
      stocks: [...this.state.stocks, stock],
      openStocks: [...this.state.openStocks, stock],
    });
  };

  handleDeleteStock = (stockId) => {
    this.setState({
      stocks: this.state.stocks.filter((stock) => stock.stocks_id !== stockId),
    });
  };

  handleDeleteStrategy = (stockId) => {
    this.setState({
      stocks: this.state.stocks.filter((stock) => stock.stocks_id !== stockId),
    });
  };

  render() {
    const value = {
      stocks: this.state.stocks,
      strategies: this.state.strategies,
      openStrat: this.state.openStrat,
      loggedIn: this.state.loggedIn,
      openStocks: this.state.openStocks,
      setLogin: this.setLogin,
      setError: this.setError,
      clearError: this.clearError,
      setStrategies: this.setStrategies,
      setStocks: this.setStocks,
      addStrategy: this.handleAddStrategy,
      addStock: this.handleAddStock,
      setOpenStrat: this.setOpenStrat,
    };

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
