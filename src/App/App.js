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


import "./App.css";

export default class App extends Component {
  state = {
    stocks: [],
    strategies: [],
  };

  handleAddFolder = (strategy) => {
    this.setState({
      strategies: [...this.state.strategies, strategy],
    });
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/stock`),
      fetch(`${config.API_ENDPOINT}/strategy`),
    ])
      .then(([stockRes, strategyRes]) => {
        if (!stockRes.ok) return stockRes.json().then((e) => Promise.reject(e));
        if (!strategyRes.ok)
          return strategyRes.json().then((e) => Promise.reject(e));

        return Promise.all([stockRes.json(), strategyRes.json()]);
      })
      .then(([stocks, strategies]) => {
        console.log(
          "App -> componentDidMount -> stock, strategy",
          stocks,
          strategies
        );
        this.setState({ stocks, strategies });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleAddStrategy = (strategy) => {
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
      stocks: this.state.stocks.filter((stock) => stock.stocks_id !== stockId),
    });
  };

  handleDeleteStrategy = (stockId) => {
    console.log(
      "App -> handleDeleteStock -> this.state.stocks",
      this.state.stocks
    );
    this.setState({
      stocks: this.state.stocks.filter((stock) => stock.stocks_id !== stockId),
    });
  };

  render() {
    const value = {
      stocks: this.state.stocks,
      strategies: this.state.strategies,
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

//https://dividend-calculator-api.herokuapp.com/  <-- api
