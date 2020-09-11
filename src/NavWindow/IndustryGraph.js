import React from "react";
import BarChart from "../BarChart"

export default class IndustryGraph extends React.Component {
  render() {
    return (
      <div className="graph dark window">
        <h2 className="dark">Expected Earnings</h2>
        <BarChart></BarChart>
      </div>
    );
  }
}
