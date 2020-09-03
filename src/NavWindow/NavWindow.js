import React from "react";
import UserWindow from "./UserWindow";
import StrategyOverview from "./StrategyOverview";
import ProjectedEarnings from "./ProjectedEarnings";
import IndustryGraph from "./IndustryGraph";
import LoginForm from "./LoginForm"

export default class NavWindow extends React.Component {
  render() {
    return (
      <nav className="light window unselected">
        <h2 className="dark">Nav / Summary</h2>
        <LoginForm></LoginForm>
        <StrategyOverview></StrategyOverview>
        <ProjectedEarnings></ProjectedEarnings>
        <IndustryGraph></IndustryGraph>
      </nav>
    );
  }
}
