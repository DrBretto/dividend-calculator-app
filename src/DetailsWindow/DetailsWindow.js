import React from "react";
import SummaryPanel from "./SummaryPanel";
import Insight from "./Insight";
import PieChart from "../PieChart"

export default class DetailsWindow extends React.Component {
  render() {
    return (
      <aside className="light window summary unselected">
        <h2 className="dark">Summary</h2>

        <SummaryPanel></SummaryPanel>

        <Insight type="EPS"></Insight>
        <PieChart></PieChart>
        <PieChart></PieChart>
        <PieChart></PieChart>
        
      </aside>
    );
  }
}
