import React, { Component } from "react";
import ApiContext from "../../contexts/ApiContext";
import config from "../../config";
import Form from "../Tools/Form";
import TokenService from "../../services/token-service";
import ColorPicker from "../Tools/ColorPicker";

export default class AddStock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  static contextType = ApiContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const stock = {
      ticker: e.target["ticker"].value,
      industry: e.target["industry"].value,
      price: e.target["price"].value,
      shares: e.target["shares"].value,
      yield: e.target["yield"].value,
      eps1: e.target["eps1"].value,
      eps5: e.target["eps5"].value,
      strategy_id: String(this.props.strategy_id),
    };

    fetch(`${config.API_ENDPOINT}/stock`, {
      method: "POST",
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((stock) => {
        this.context.addStock(stock);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <section className="AddStock">
        <h2 onClick={this.toggleMenu}>Create a stock</h2>
        {!this.state.isHidden && (
          <Form onSubmit={this.handleSubmit} className="open window light">
            <ColorPicker />
            <label htmlFor="ticker">Stock Ticker:</label>
            <input type="text" id="ticker" name="ticker" />
            <br />
            <br />
            <label htmlFor="industry">Industry:</label>
            <input type="text" id="industry" name="industry" />
            <br />
            <br />
            <label htmlFor="shares">Shares:</label>
            <input type="text" id="shares" name="shares" />
            <br />
            <br />
            <label htmlFor="price">Target price:</label>
            <input type="text" id="price" name="price" />
            <br />
            <br />
            <label htmlFor="yield">Dividend Yield:</label>
            <input type="text" id="yield" name="yield" />
            <br />
            <br />
            <label htmlFor="eps1">EPS 1yr:</label>
            <input type="text" id="eps1" name="eps1" />
            <br />
            <br />
            <label htmlFor="eps5">EPS 5yr:</label>
            <input type="text" id="eps5" name="eps5" />
            <br />
            <br />
            <button>Cancel</button>
            <button>Add Stock</button>
            <div className="buttons">
              <button type="submit">Add stock</button>
            </div>
          </Form>
        )}
      </section>
    );
  }
}