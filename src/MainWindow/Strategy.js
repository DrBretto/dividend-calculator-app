import React from "react";
import ApoContext from "../ApiContext";
import ApiContext from "../ApiContext";

export default class Strategy extends React.Component {
  static contextType = ApiContext;


  render() {

    return (
      <div className="blue window">
        <h3>{this.props.id}</h3>
      </div>
    );
  }
}
