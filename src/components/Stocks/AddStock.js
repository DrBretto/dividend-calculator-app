/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import ApiContext from "../../contexts/ApiContext";
import config from "../../config";
import Form from "../Tools/Form";
import TokenService from "../../services/token-service";
import ColorPicker from "../Tools/ColorPicker";
import color from "../../utils/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import FormValidator from "../Tools/FormValidator";

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

      stock: {
        ticker: "",
        industry: "",
        shares: "",
        price: "",
        yield: "",
        eps1: "",
      },

      tickerTouched: false,
      industryTouched: false,
      priceTouched: false,
      sharesTouched: false,
      yieldTouched: false,
      eps1Touched: false,

      isHidden: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  static contextType = ApiContext;

  validateTicker() {
    const name = this.state.stock.ticker.trim();
    const err = " Stock ticker is required";
    if (this.removeSpecialChars(name).length === 0) {
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

  removeSpecialChars() {
    const name = this.state.stock.ticker.trim();
    return name.replace(/[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/g, "");
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
                  this.setState({ tickerTouched: true });
                  stock.ticker = e.currentTarget.value;
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
                  this.setState({ industryTouched: true });
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
                  this.setState({ sharesTouched: true });
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
                  this.setState({ priceTouched: true });
                  stock.price = e.currentTarget.value;
                  this.updateStock(stock);
                }}
                type="number"
                id="price"
                name="price"
              />
            </div>
            <div className="inputs addStock">
              <label htmlFor="yield">Yield:</label>
              <input
                onChange={(e) => {
                  this.setState({ yieldTouched: true });
                  stock.yield = e.currentTarget.value;
                  this.updateStock(stock);
                }}
                type="number"
                id="yield"
                name="yield"
              />
            </div>
            <div className="inputs addStock">
              <label htmlFor="eps1">EPS 1yr:</label>
              <input
                onChange={(e) => {
                  this.setState({ eps1Touched: true });
                  stock.eps1 = e.currentTarget.value;
                  this.updateStock(stock);
                }}
                type="number"
                id="eps1"
                name="eps1"
                />
            </div>

            {this.state.tickerTouched && <FormValidator message={tickerErr} />}
            {this.state.tickerTouched && <FormValidator message={tickerErr} />}
            {this.state.tickerTouched && <FormValidator message={tickerErr} />}
            {this.state.tickerTouched && <FormValidator message={tickerErr} />}
            {this.state.tickerTouched && <FormValidator message={tickerErr} />}
            <button 
            onClick={(e) => {
              this.setState({       
                tickerTouched: true,
                industryTouched: true,
                priceTouched: true,
                sharesTouched: true,
                yieldTouched: true,
                eps1Touched: true, })
             
              // stock.ticker = this.removeSpecialChars(stock.ticker);
              this.updateStock(stock);
              if (!tickerErr && !tickerErr && !tickerErr) {
                this.handleSubmit(stock);
              }
            }}
            className="addStockButton" 
            type="submit">
              Add stock
            </button>
          </Form>
        )}
      </section>
    );
  }
}
