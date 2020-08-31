import React from 'react'

export default class DetailsWindow extends React.Component {


  render() {
      return (
          <aside className="light window summary unselected">
        <h2 className="dark">Summary</h2>

        <div className="light window">
          <p>MSFT</p>
          <p>10 Shares @ $213.02</p>
          <p>Proposed Equity: $2130.20</p>
          <p>Dividend Yield: 5.37%</p>
          <p>EPS 1/5: 5.76 / 0.15</p>
        </div>
        <div className="yellow window">
          <h4>Dividend Yield: 0.96%</h4>
        </div>
        <div className="green window">
          <h4>EPS 1-yr: 5.76</h4>
          <p>Description with more information when clicked</p>
        </div>
        <div className="green window">
          <h4>EPS 5-yr: 0.15</h4>
        </div>
        <div className="light window">
          <h4>PE: 36.98</h4>
        </div>
        <div className="red window">
          <h4>Time to Recoup: 75mo</h4>
        </div>
      </aside>
      );
  }
}