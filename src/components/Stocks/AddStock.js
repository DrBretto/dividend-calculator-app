import React, { Component } from "react";
import ApiContext from "../../contexts/ApiContext";
import config from "../../config";
import Form from "../Tools/Form";
import TokenService from "../../services/token-service";
import ColorPicker from "../Tools/ColorPicker";
import color from "../../utilities/color";

//TODO -- better inputs, no duplicates

export default class AddStock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: {
        r: "0",
        g: "0",
        b: "0",
        a: "1",
      },
      isHidden: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.setState({
      color: color.getRandomColor(),
    });
  }

  toggleMenu() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  updateColor = (newColor) => {
    this.setState({ color: newColor });
  };

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
      color: color.rgbToHex(this.state.color),
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
        this.setState({
          isHidden: true,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <section className="AddStock">
        <h2 onClick={this.toggleMenu}>Create a stock </h2>
        {!this.state.isHidden && (
          <Form
            onSubmit={this.handleSubmit}
            className="window"
            style={{
              background: color.getGradient(this.state.color),
            }}
          >
            <ColorPicker color={this.state.color} setColor={this.updateColor} />
            <div className="shader" />
            <div className="inputs addStock">
              <label htmlFor="ticker">Stock Ticker:</label>
              <input type="text" id="ticker" name="ticker" />
            </div>
            <div className="inputs addStock">
              <label htmlFor="industry">Industry:</label>
              <input type="text" id="industry" name="industry" />
            </div>
            <div className="inputs addStock">
              <label htmlFor="shares">Shares:</label>
              <input type="text" id="shares" name="shares" />
            </div>
            <div className="inputs addStock">
              <label htmlFor="price">Target price:</label>
              <input type="text" id="price" name="price" />
            </div>
            <div className="inputs addStock">
              <label htmlFor="yield">Dividend Yield:</label>
              <input type="text" id="yield" name="yield" />
            </div>
            <div className="inputs addStock">
              <label htmlFor="eps1">EPS 1yr:</label>
              <input type="text" id="eps1" name="eps1" />
            </div>
            <button className="addStockButton" type="submit">
              Add stock
            </button>
          </Form>
        )}
      </section>
    );
  }
}
