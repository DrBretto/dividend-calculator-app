import React, { Component } from "react";
import { Route } from "react-router-dom";

import NavWindow from "../NavWindow/NavWindow";
import MainWindow from "../MainWindow/MainWindow";
import DetailsWindow from "../DetailsWindow/DetailsWindow";
//import NotFoundPage from "../NotFoundPage";

import ApiContext from "../ApiContext";

import "./App.css";

export default class App extends Component {
  static contextType = ApiContext;

  render() {
    return (
      <main className="App">
        <Route path="/" component={NavWindow} />
        <div className="grid">
          <Route  path="/" component={MainWindow} />
          <Route  path="/" component={DetailsWindow} />
          {/* <Route component={NotFoundPage} /> */}
          <div></div>
        </div>
      </main>
    );
  }
}
