import React, { Component } from "react";
import { Route } from "react-router-dom";


import NavWindow from "../NavWindow/NavWindow";
import MainWindow from "../MainWindow/MainWindow";
import DetailsWindow from "../DetailsWindow/DetailsWindow";
import Footer from "../Footer"
//import NotFoundPage from "../NotFoundPage";

import ApiContext from "../ApiContext";

import "./setup.css";
import "./gradients.css";
import "./App.css";

export default class App extends Component {
  static contextType = ApiContext;

  render() {
    return (
      <main className="App">
        {/* //TODO <Route component={NotFoundPage} /> */}
        <Route path="/" component={NavWindow} />
        <Route path="/" component={MainWindow} />
        <Route path="/" component={DetailsWindow} />
        <Footer></Footer>
      </main>
    );
  }
}
