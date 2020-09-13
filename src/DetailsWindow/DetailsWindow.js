import React from "react";
import SummaryPanel from "./SummaryPanel";
import Insight from "./Insight";
import PieChart from "../PieChart";
import data from "../Utilities/data";
import ApiContext from "../ApiContext";

export default class DetailsWindow extends React.Component {
  static contextType = ApiContext;

  render() {
    const stocks = this.context.openStocks;
    const industryData = data.industryData(stocks);
    const allocation = data.allocation(stocks);
    const divProfits = data.divProfits(stocks);

    return (
      <aside className="light window summary unselected">
        <h2 className="dark">Summary</h2>
        <SummaryPanel></SummaryPanel>
        {industryData && <PieChart data={industryData}></PieChart>}
        {allocation && <PieChart data={allocation}></PieChart>}
        {divProfits && <PieChart data={divProfits}></PieChart>}

        <Insight type="EPS"></Insight>
      </aside>
    );
  }
}
