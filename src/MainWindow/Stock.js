import React from "react";

export default class Stock extends React.Component {
  render() {
    return (
      <li className="blue window">
        <h4>{this.props.label}</h4>
      </li>
    );
  }
}
