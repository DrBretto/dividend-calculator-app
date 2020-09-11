import React from "react";
import ApiContext from "../ApiContext";
import calc from "../Utilities/calculations";

export default class SummaryPanel extends React.Component {
  static contextType = ApiContext;

  render() {
    const stocks = this.context.openStocks;
    return (
      <div className="gray window">
        {!this.context.openStrat.title && <p>No strategy selected</p>}

        {this.context.openStrat.title && (
          <div>
            <h3 className="red window">{this.context.openStrat.title}</h3>
            <p className="green">
              Initial Investment- ${calc.totalValue(stocks)}
            </p>
            <p className="blue">
              Expected profit 1yr- ${calc.expected1yr(stocks)}
            </p>
            <p className="orange">
              Dividend payout: ${calc.dividendPayout(stocks)}
            </p>
          </div>
        )}
      </div>
    );
  }
}
