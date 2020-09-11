import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { Section } from "../Utilities/Utils";
import ApiContext from "../ApiContext";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };
  static contextType = ApiContext;

  handleLoginSuccess = () => {
    this.context.setLogin(true);
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <Section className="LoginPage">
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}
