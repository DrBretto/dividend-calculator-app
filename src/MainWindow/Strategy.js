import React from "react";

export default class Strategy extends React.Component {
  render() {
    return (
      <ul className="yellow window strategy">
        <h3>{this.props.label}</h3>
      </ul>
    );
  }
}
