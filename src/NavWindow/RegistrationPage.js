import React, { Component } from "react";
import { Section } from "../Utilities/Utils";
import RegistrationForm from "./RegistrationForm";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return (
      <Section className="RegistrationPage">
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    );
  }
}
