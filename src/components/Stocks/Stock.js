import React from "react";
import color from "../../utilities/color"

export default class Stock extends React.Component {
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

  render() {
    const { ticker, shares, price, industry, eps1} = this.props.stock;
    console.log("Stock -> render -> this.props.stock", this.props.stock)
    const col = color.hexToRgb(this.props.stock.color)
    console.log("Stock -> render -> col", col)
    
    const yld = this.props.stock.yield;
    const tv = shares * price;
    const rule72 = 72 * (yld / 100);

    return (
      <div
        className="window stock"
        style={{
          background: color.getGradient(col),
        }}
      >
        <h3 onClick={this.toggleMenu}>
          {" "}
          {ticker} - {shares} shares @ {price} = ${tv}
        </h3>
        {!this.state.isHidden && (
          <div className="stockDetails">
            <span className="light ">Industry: {industry}</span>
            <span className="light ">Yield: {yld}</span>
            <span className="light ">EPS 1yr: {eps1}</span>
            <span className="green window">Recoup: {rule72.toFixed(2)} years</span>
          </div>
        )}
      </div>
    );
  }
}
