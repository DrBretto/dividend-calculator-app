import React from 'react'

export default class SummaryPanel extends React.Component {


  render() {
      return (
          <div className="gray window">
        <h3 className="red window">MSFT</h3>
        <p className="green">10 Shares @ $213.02</p>
        <p className="blue">Proposed Equity: $2130.20</p>
        <p className="purple">Dividend Yield: 5.37%</p>
        <p className="orange">EPS 1/5: 5.76 / 0.15</p>
      </div>
      );
  }
}