import React, { Component } from "react";
import { Route, } from "react-router-dom";

import Header from "../NavWindow/Header";
import Footer from "../Footer";
import NavWindow from "../NavWindow/NavWindow";
import MainWindow from "../MainWindow/MainWindow";
import DetailsWindow from "../DetailsWindow/DetailsWindow";
import LoginPage from "../NavWindow/LoginPage";
import RegistrationPage from "../NavWindow/RegistrationPage";
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
          <Route path={"/login"} component={LoginPage} />
          <Route path={"/register"} component={RegistrationPage} />
          <Route exact path="/" component={MainWindow} />
          <Route exact path="/" component={DetailsWindow} />
          {/* <Route component={NotFoundPage} /> */}
          <Footer></Footer>
          <div></div>
        </div>
      </main>
    );
  }
}
