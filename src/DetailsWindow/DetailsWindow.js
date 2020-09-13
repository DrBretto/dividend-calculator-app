import React from "react";
import SummaryPanel from "./SummaryPanel";
import ApiContext from "../ApiContext";
import Footer from "./Footer"

export default class DetailsWindow extends React.Component {
  static contextType = ApiContext;

  render() {



    return (
      <aside className="light window summary">
        <h2 className="dark">Summary</h2>
        <SummaryPanel></SummaryPanel>
        <Footer></Footer>
      </aside>
    );
  }
}
