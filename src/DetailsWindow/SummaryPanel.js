import React from 'react'

export default class SummaryPanel extends React.Component {


  render() {
      return (
          <div className="light window">
        <p>MSFT</p>
        <p>10 Shares @ $213.02</p>
        <p>Proposed Equity: $2130.20</p>
        <p>Dividend Yield: 5.37%</p>
        <p>EPS 1/5: 5.76 / 0.15</p>
      </div>
      );
  }
}