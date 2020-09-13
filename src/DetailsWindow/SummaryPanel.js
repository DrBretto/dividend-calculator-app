import React from "react";
import ApiContext from "../ApiContext";
import calc from "../Utilities/calculations";
import PieChart from "../PieChart";
import data from "../Utilities/data";

export default class SummaryPanel extends React.Component {
  static contextType = ApiContext;

  render() {
    const stocks = this.context.openStocks;
    const industryData = data.industryData(stocks);
    const allocation = data.allocation(stocks);
    const divProfits = data.divProfits(stocks);

    return (
      <div className="gray window">
        {!this.context.openStrat.title && <p>No strategy selected</p>}

        {this.context.openStrat.title && ( 
            <h3 className="red window">{this.context.openStrat.title}</h3>)}
      
            <div className="light smGraph">
              Initial Investment- ${calc.totalValue(stocks)}
              {allocation && <PieChart data={allocation}></PieChart>}
            </div>

            <p className="dark smGraph">
              Dividend payout: ${calc.dividendPayout(stocks)}
              {divProfits && <PieChart data={divProfits}></PieChart>}
            </p>
        
        {/* )} */}
      </div>
    );
  }
}
