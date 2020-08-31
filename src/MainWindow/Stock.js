import React from "react";

export default class Stock extends React.Component {
  render() {
    return (
      <div className="blue window stock">
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}
