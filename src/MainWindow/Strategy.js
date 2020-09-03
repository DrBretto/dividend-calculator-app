import React from "react";

export default class Strategy extends React.Component {
  render() {
    return (
      <div className="yellow window">
        <h3>{this.props.label}</h3>
      </div>
    );
  }
}
