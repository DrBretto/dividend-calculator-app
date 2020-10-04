/* eslint-disable no-useless-escape */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import ApiContext from "../../contexts/ApiContext";
import config from "../../config";
import Form from "../Tools/Form";
import TokenService from "../../services/token-service";
import ColorPicker from "../Tools/ColorPicker";
import color from "../../utils/color";
import FormValidator from "../Tools/FormValidator";

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

      stock: {
        ticker: "",
        industry: "",
        shares: "",
        price: "",
        yield: "",
        eps1: "",
      },

      touched: false,
      submitTouched: false,
      isHidden: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  static contextType = ApiContext;

  validateTicker() {
    const ticker = this.state.stock.ticker.trim();
    let err = "";
    if (this.removeSpecialChars(ticker).length === 0) {
      err = " Stock ticker is required";
      return (
        <div className="critical">
          <FontAwesomeIcon
            className="criticalIcon"
            icon={faExclamationCircle}
          />
          {err}
        </div>
      );
    } else if (this.removeSpecialChars(ticker).length > 4) {
      err = " Ticker: max 4 chars";
      return (
        <div className="critical">
          <FontAwesomeIcon
            className="criticalIcon"
            icon={faExclamationCircle}
          />
          {err}
        </div>
      );
    }
  }

  validateAll() {
    const stock = this.state.stock;
    let err = "";
    if (
      stock.ticker.length === 0 ||
      stock.industry.length === 0 ||
      stock.price.length === 0 ||
      stock.shares.length === 0 ||
      stock.yield.length === 0 ||
      stock.eps1.length === 0
    ) {
      err = " All fields are required";
      return (
        <div className="critical">
          <FontAwesomeIcon
            className="criticalIcon"
            icon={faExclamationCircle}
          />
          {err}
        </div>
      );
    }
  }

  updateStock(stock) {
    this.setState({
      stock: {
        ticker: stock.ticker,
        industry: stock.industry,
        price: stock.price,
        shares: stock.shares,
        yield: stock.yield,
        eps1: stock.eps1,
      },
    });
    return stock;
  }

  componentDidMount() {
    this.getRandomColor();
  }

  getRandomColor() {
    this.setState({
      color: color.getRandomColor(),
    });
  }

  toggleMenu() {
    this.getRandomColor();
    this.setState({ isHidden: !this.state.isHidden });
  }

  updateColor = (newColor) => {
    this.setState({ color: newColor });
  };

  handleSubmit = (stock) => {
    stock.color = color.rgbToHex(this.state.color);
    stock.strategy_id = String(this.props.strategy_id);

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

  removeSpecialChars(str) {
    return str.replace(/[!@#$%^&*()_+\-\ \=\[\]{};':"\\|,.<>\/?]/g, "");
  }

  render() {
    let stock = {
      ticker: this.state.stock.ticker,
      industry: this.state.stock.industry,
      price: this.state.stock.price,
      shares: this.state.stock.shares,
      yield: this.state.stock.yield,
      eps1: this.state.stock.eps1,
    };

    const tickerErr = this.validateTicker();
    const allErr = this.validateAll();

    return (
      <section className="AddStock">
        <h2 onClick={this.toggleMenu} className="addStockHeader">
          +Stock{" "}
        </h2>
        {!this.state.isHidden && (
          <Form
            className="window"
            style={{
              background: color.getGradient(this.state.color),
            }}
          >
            <ColorPicker color={this.state.color} setColor={this.updateColor} />
            <div className="shader" />

            <div className="inputs addStock">
              <label htmlFor="ticker">Ticker:</label>
              <input
                onChange={(e) => {
                  this.setState({ touched: true });
                  stock.ticker = this.removeSpecialChars(
                    e.currentTarget.value.toUpperCase()
                  );
                  this.updateStock(stock);
                }}
                type="text"
                id="ticker"
                name="ticker"
              />
            </div>

            <div className="inputs addStock">
              <label htmlFor="industry">Industry:</label>
              <input
                onChange={(e) => {
                  this.setState({ touched: true });
                  stock.industry = e.currentTarget.value;
                  this.updateStock(stock);
                }}
                type="text"
                id="industry"
                name="industry"
              />
            </div>

            <div className="inputs addStock">
              <label htmlFor="shares">Shares:</label>
              <input
                onChange={(e) => {
                  this.setState({ touched: true });
                  stock.shares = e.currentTarget.value;
                  this.updateStock(stock);
                }}
                type="number"
                id="shares"
                name="shares"
              />
            </div>

            <div className="inputs addStock">
              <label htmlFor="price">Price:</label>
              <input
                onChange={(e) => {
                  this.setState({ touched: true });
                  stock.price = e.currentTarget.value;
                  this.updateStock(stock);
                }}
                type="number"
                id="price"
                name="price"
                step="any"
              />
            </div>

            <div className="inputs addStock">
              <label htmlFor="yield">Yield:</label>
              <input
                onChange={(e) => {
                  this.setState({ touched: true });
                  stock.yield = e.currentTarget.value;
                  this.updateStock(stock);
                }}
                type="number"
                id="yield"
                name="yield"
                step="any"
              />
            </div>

            <div className="inputs addStock">
              <label htmlFor="eps1">EPS 1yr:</label>
              <input
                onChange={(e) => {
                  this.setState({ touched: true });
                  stock.eps1 = e.currentTarget.value;
                  this.updateStock(stock);
                }}
                type="number"
                id="eps1"
                name="eps1"
                step="any"
              />
            </div>

            {this.state.touched && <FormValidator message={tickerErr} />}
            {this.state.submitTouched && <FormValidator message={allErr} />}

            <button
              onClick={(e) => {
                e.preventDefault();
                this.setState({ submitTouched: true });
                this.updateStock(stock);
                if (!tickerErr && !allErr) {
                  this.handleSubmit(stock);
                }
              }}
              className="addStockButton"
              type="submit"
            >
              Add stock
            </button>
          </Form>
        )}
      </section>
    );
  }
}
