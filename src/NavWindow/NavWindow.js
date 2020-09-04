import React from "react";
import { Link } from "react-router-dom";
import UserWindow from "./UserWindow";
import StrategyOverview from "./StrategyOverview";
import ProjectedEarnings from "./ProjectedEarnings";
import IndustryGraph from "./IndustryGraph";
import LoginForm from "./LoginForm";
import LoginPage from "./LoginPage";
import { Hyph } from "../Utilities/Utils";
import TokenService from "../services/token-service";
import { Section } from "../Utilities/Utils";

export default class NavWindow extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Section className="LoginPage">
          <h2>Login</h2>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
          <Link to="/register">Register</Link>
        </Section>
      </div>
    );
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <nav className="light window unselected">
        <h2 className="dark">Nav / Summary</h2>

        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        <StrategyOverview></StrategyOverview>
        <ProjectedEarnings></ProjectedEarnings>
        <IndustryGraph></IndustryGraph>
      </nav>
    );
  }
}
