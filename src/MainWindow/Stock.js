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
    const { ticker, shares, price, industry, eps1, eps5 } = this.props.stock;
    const yld = this.props.stock.yield;

    return (
      <div className="blue window">
        <h3 onClick={this.toggleMenu}> {ticker}</h3>
        {!this.state.isHidden && (
          <div className="dark window stockDetails">
            <span className="blue window">Shares: {shares}</span>
            <span className="dark window">Price: {price}</span>
            <span className="white window">Industry: {industry}</span>
            <span className="light window">Yield: {yld}</span>
            <span className="green window">EPS 1yr:{eps1}</span>
            <span className="red window">EPS 5yr:{eps5}</span>
          </div>
        )}
      </div>
    );
  }
}
