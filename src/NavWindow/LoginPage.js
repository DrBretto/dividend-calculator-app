import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { Section } from "../Utilities/Utils";
import ApiContext from "../ApiContext";
import { Link } from "react-router-dom";

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
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        <p>No account? <Link to="/register">Register</Link> here!</p>
      </Section>
    );
  }
}
