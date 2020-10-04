import React, { Component } from "react";
import { Link } from "react-router-dom";

import LoginForm from "../components/Login/LoginForm";
import { Section } from "../utils/utils";
import ApiContext from "../contexts/ApiContext";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };
  static contextType = ApiContext;

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <Section className="LoginPage">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        <p>
          No account? <Link to="/register">Register</Link> here!
        </p>
      </Section>
    );
  }
}
