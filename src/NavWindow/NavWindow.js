import React from "react";
import { Link, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import TokenService from "../services/token-service";
import { Section } from "../Utilities/Utils";
import ApiContext from "../ApiContext";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage"

export default class NavWindow extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = ApiContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setLogin(false);

    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <h2>Welcome, </h2>
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
          <Route path={"/register"} component={RegistrationPage} />
          <Route path={"/login"} component={LoginPage} />
          <Link to="/login">Log In</Link>
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
      <nav className="dark window">
        <h2 className="dark">Nav / Summary</h2>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
