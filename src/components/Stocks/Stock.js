import React from "react";

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
    const { ticker, shares, price, industry, eps1 } = this.props.stock;
    const yld = this.props.stock.yield;
    const tv = shares * price;
    const rule72 = 72 * (yld / 100);

    return (
      <div className="blue window">
        <h3 onClick={this.toggleMenu}>
          {" "}
    {ticker} - {shares} shares @ {price} = ${tv}
        </h3>
        {!this.state.isHidden && (
          <div className="stockDetails">
            {/* <span className="blue window">Shares: {shares}</span> */}
            {/* <span className="dark window">Price: {price}</span> */}
            <span className="light ">Industry: {industry}</span>
            <span className="light ">Yield: {yld}</span>
            <span className="light ">EPS 1yr:{eps1}</span>
            {/* <span className="red window">EPS 5yr:{eps5}</span> */}
            <span className="green ">
              Recoup:{rule72.toFixed(2)} years
            </span>
          </div>
        )}
      </div>
    );
  }
}
