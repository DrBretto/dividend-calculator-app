import React from "react";
import Currency from "react-currency-formatter";

import color from "../../utils/color";
import DeleteButton from "../Tools/DeleteButton";
import ColorPicker from "../Tools/ColorPicker";

export default class Stock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.stock.color,

      isHidden: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentDidMount() {
    this.updateColor(this.props.stock.color);
  }

  toggleMenu() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  updateColor = (newColor) => {
    this.setState({ color: newColor });
  };

  render() {
    const { id, ticker, shares, price, industry, eps1 } = this.props.stock;
    const col = color.hexToRgb(this.props.stock.color);

    const yld = this.props.stock.yield;
    const tv = shares * price;
    const rule72 = 72 * (yld / 100);
    const pe = price / eps1;
    const earningsYield = eps1 / price;

    return (
      <div
        className="window stock"
        style={{
          background: color.getGradient(col),
        }}
      >
        <div className="stockHead" onClick={this.toggleMenu}>
          <h3>{ticker}</h3>
          <h3>{shares} shares</h3>
          <h3>
            <Currency quantity={price} currency="USD" />
          </h3>
        </div>

        <DeleteButton type="stock" id={id} />
        <ColorPicker color={this.state.color} setColor={this.updateColor} />

        {!this.state.isHidden && (
          <div className="stockDetails">
            <span className="light ">Industry: {industry}</span>
            <span className="light ">
              Total Cost: <Currency quantity={tv} currency="USD" />
            </span>
            <span className="light ">Yield: {yld}%</span>
            <span className="light ">EPS 1yr: {eps1}</span>
            <span className="light ">PE: {pe.toFixed(2)}</span>
            <span className="light ">
              Earnings Yield: {earningsYield.toFixed(2)}
            </span>
            <span className="green window">
              Recoup: {rule72.toFixed(2)} years
            </span>
          </div>
        )}
      </div>
    );
  }
}
