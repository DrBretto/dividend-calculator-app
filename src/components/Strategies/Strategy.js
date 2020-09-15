import React from "react";
import Context from "../../contexts/ApiContext";

export default class Strategy extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="blue window">
        <h3>{this.props.id}</h3>
      </div>
    );
  }
}
