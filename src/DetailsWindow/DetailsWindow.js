import React from "react";
import SummaryPanel from "./SummaryPanel";
import Insight from "./Insight";

export default class DetailsWindow extends React.Component {
  render() {
    return (
      <aside className="light window summary unselected">
        <h2 className="dark">Summary</h2>

        <SummaryPanel></SummaryPanel>

        <Insight type="EPS"></Insight>
        
        <div className="orange window">
          <h4>EPS 1-yr: 5.76</h4>
          <p className="light">Description with more information when clicked</p>
        </div>
        <div className="yellow window">
          <h4>EPS 1-yr: 5.76</h4>
          <p className="white">Description with more information when clicked</p>
        </div>
        <div className="red window">
          <h4>EPS 5-yr: 0.15</h4>
          <p className="blue">Description with more information when clicked</p>
        </div>
        <div className="purple window">
          <h4>PE: 36.98</h4>
          <p className="dark">Description with more information when clicked</p>
        </div>
        <div className="green window">
          <h4>Time to Recoup: 75mo</h4>
          <p className="red">Description with more information when clicked</p>
        </div>
      </aside>
    );
  }
}
