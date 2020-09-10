import React from 'react'

export default class SummaryPanel extends React.Component {


  render() {
      return (
          <div className="light window">
        <p className="red">MSFT</p>
        <p className="green">10 Shares @ $213.02</p>
        <p className="yellow">Proposed Equity: $2130.20</p>
        <p className="light">Dividend Yield: 5.37%</p>
        <p className="dark">EPS 1/5: 5.76 / 0.15</p>
      </div>
      );
  }
}