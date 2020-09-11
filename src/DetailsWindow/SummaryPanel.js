import React from "react";
import ApiContext from "../ApiContext";
import calculations from "../Utilities/calculations"

export default class SummaryPanel extends React.Component {
  static contextType = ApiContext;

  render() {
    return (
      

      <div className="gray window">
        {!this.context.openStrat.title && <p>No strategy selected</p>}

        {this.context.openStrat.title && (
          <div>
            <h3 className="red window">{this.context.openStrat.title}</h3>
            <p className="green">Initial Investment- ${calculations.totalValue(this.context.openStocks)}</p>
        <p className="blue">Expected profit 1yr- ${calculations.expected1yr(this.context.openStocks)}</p>
            <p className="purple"></p>
            <p className="orange"></p>
          </div>
        )}
      </div>
    );
  }
}
