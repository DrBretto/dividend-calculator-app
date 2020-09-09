import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import NavWindow from "../NavWindow/NavWindow";
import MainWindow from "../MainWindow/MainWindow";
import DetailsWindow from "../DetailsWindow/DetailsWindow";
import ApiContext from "../ApiContext";
import config from "../config";
import { Route, Switch, Link } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import LoginPage from "../NavWindow/LoginPage";
import TokenService from "../services/token-service";
import RegistrationPage from "../NavWindow/RegistrationPage";
import ApiService from "../services/api-service";

import "./App.css";

export default class App extends Component {
  static contextType = ApiContext;

  handleAddFolder = (strategy) => {
    this.setState({
      strategies: [...this.context.strategies, strategy],
    });
  };

  componentDidMount() {
    
    ApiService.getStrategies()
      .then(this.context.setStrategy)
      .catch(this.context.setError);
    ApiService.getStocks()
      .then(this.context.setStock)
      .catch(this.context.setError);
  }

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
      stocks: this.context.stocks.filter((stock) => stock.stocks_id !== stockId),
    });
  };

  handleDeleteStrategy = (stockId) => {
    console.log(
      "App -> handleDeleteStock -> this.context.stocks",
      this.context.stocks
    );
    this.setState({
      stocks: this.context.stocks.filter((stock) => stock.stocks_id !== stockId),
    });
  };

  render() {
    const value = {
      stocks: this.context.stocks,
      strategies: this.context.strategies,
      addStrategy: this.handleAddStrategy,
      addStock: this.handleAddStock,
      deleteStock: this.handleDeleteStock,
      deleteStrategy: this.handleDeleteStrategy,
    };

    return (
      <ApiContext.Provider value={value}>
        <main className="App">
          <Header></Header>
          <div className="grid">
            <Route exact path="/" component={NavWindow} />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/register"} component={RegistrationPage} />
            <Route exact path="/" component={MainWindow} />
            <Route exact path="/" component={DetailsWindow} />

            {/* <Route component={NotFoundPage} /> */}

            <Footer></Footer>
            <div></div>
          </div>
        </main>
      </ApiContext.Provider>
    );
  }
}
