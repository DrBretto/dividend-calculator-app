import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavWindow from "./NavWindow/NavWindow";
import MainWindow from "./MainWindow/MainWindow";
import DetailsWindow from "./DetailsWindow/DetailsWindow";

import "./App.css";

function App() {
  return (
    <main className="App">
      <Header></Header>
      <div className="grid">
        <NavWindow></NavWindow>
        <MainWindow></MainWindow>
        <DetailsWindow></DetailsWindow>
        <Footer></Footer>
      </div>
    </main>
  );
}

export default App;
