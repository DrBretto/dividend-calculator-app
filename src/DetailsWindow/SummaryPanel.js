import React from "react";
import ApiContext from "../ApiContext";
import Strategy from "../MainWindow/Strategy";

export default class SummaryPanel extends React.Component {
  static contextType = ApiContext;


  render() {
    // const strat = getOpenStrategy(this.context.openStrat);
    // const stocks = getStocks(strat.id);
    return (
      <div className="gray window">
        <h3 className="red window">{}</h3>
        <p className="green">10 Shares @ $213.02</p>
        <p className="blue">Proposed Equity: $2130.20</p>
        <p className="purple">Dividend Yield: 5.37%</p>
        <p className="orange">EPS 1/5: 5.76 / 0.15</p>
      </div>
    );
  }
}
