import React from "react";

export default class AddStock extends React.Component {

  render() {
      return (
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
      );
  }
}