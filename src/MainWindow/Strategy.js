import React from "react";

export default class Strategy extends React.Component {
  render() {
    return (
      <li className="yellow window">
        <h3>{this.props.label}</h3>
      </li>
    );
  }
}
