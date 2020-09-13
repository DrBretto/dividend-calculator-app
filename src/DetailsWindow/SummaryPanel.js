import React from "react";
import ApiContext from "../ApiContext";
import calc from "../Utilities/calculations";
import PieChart from "../PieChart";
import data from "../Utilities/data";
import Currency from "react-currency-formatter";

export default class SummaryPanel extends React.Component {
  static contextType = ApiContext;

  render() {
    const stocks = this.context.openStocks;
    const industryData = data.industryData(stocks);
    const allocation = data.allocation(stocks);
    const divProfits = data.divProfits(stocks);

    return (
      <div className="gray window summaryPanel">
        {!this.context.openStrat.title && <p>No strategy selected</p>}

        {this.context.openStrat.title && (
          <h3 className="red window">{this.context.openStrat.title}</h3>
        )}

        <div className="smGraph light window">
          Initial Investment-{" "}
          <Currency quantity={calc.totalValue(stocks)} currency="USD" />
          {allocation && <PieChart data={allocation}></PieChart>}
        </div>

        <div className="light window smGraph">
          Dividend payout: 
          <Currency quantity={calc.dividendPayout(stocks)} currency="USD" />
   
          {divProfits && <PieChart data={divProfits}></PieChart>}
        </div>
        <div className="light window smGraph">
          Industry Allocation:
          {industryData && <PieChart data={industryData}></PieChart>}
        </div>
        {/* )} */}
      </div>
    );
  }
}
