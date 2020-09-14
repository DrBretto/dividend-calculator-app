import React from "react";
import SummaryPanel from "./SummaryPanel";
import ApiContext from "../ApiContext";

export default class DetailsWindow extends React.Component {
  static contextType = ApiContext;

  render() {



    return (
      <aside className="light main window">
        <h2 className="dark">Summary</h2>
        <SummaryPanel></SummaryPanel>
      </aside>
    );
  }
}
