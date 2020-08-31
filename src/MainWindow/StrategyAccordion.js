import React from "react";
import Strategy from "./Strategy";

export default class StrategyAccordion extends React.Component {
  render() {
    return (
      <div className="strategyAccordion">
        <Strategy>Strategy 1</Strategy>
        <div className="light window strategy">
          <h3 className="dark window">Strategy 2</h3>
          <div className="blue window stock">
            <h4>MSFT - 10 Shares</h4>
          </div>
          <div className="blue window stock">
            <h4>Add New Stock:</h4>
            <form className="open window light">
              <label htmlFor="name">Stock Ticker:</label>
              <input type="text" id="name" name="name" />
              <br />
              <br />
              <label htmlFor="Type:">Type of stock:</label>
              <input type="text" id="Type:" name="Type:" />
              <br />
              <br />
              <label htmlFor="shares"># of shares:</label>
              <input type="text" id="shares" name="shares" />
              <br />
              <br />
              <label htmlFor="Type:">Target price:</label>
              <input type="text" id="Type:" name="Type:" />
              <br />
              <br />
              <label htmlFor="Type:">Dividend Yield:</label>
              <input type="text" id="Type:" name="Type:" />
              <br />
              <br />
              <label htmlFor="Type:">EPS 1yr:</label>
              <input type="text" id="Type:" name="Type:" />
              <br />
              <br />
              <label htmlFor="Type:">EPS 5yr:</label>
              <input type="text" id="Type:" name="Type:" />
              <br />
              <br />
              <button>Cancel</button>
              <button>Add Stock</button>
            </form>
          </div>
          <div className="blue window stock">
            <h4>MMM - 10 Shares</h4>
          </div>
          <div className="blue window stock">
            <h4>KO - 10 Shares</h4>
          </div>
          <div className="blue window stock">
            <h4>AWR - 10 Shares</h4>
          </div>
        </div>
        <div className="light window strategy">Strategy 3</div>
        <div className="light window strategy">Strategy 4</div>
      </div>
    );
  }
}
