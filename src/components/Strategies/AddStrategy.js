/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import ApiContext from "../../contexts/ApiContext";
import config from "../../config";
import Form from "../Tools/Form";
import TokenService from "../../services/token-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import FormValidator from "../Tools/FormValidator";

//! ---------  needs to check for duplicates
export default class AddStrategy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false,
      },
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = ApiContext;

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
    return name;
  }

  validateName() {
    const name = this.state.name.value.trim();
    const err = " Strategy name is required";
    if (this.removeSpecialChars(name).length === 0) {
      return (
        <div className="critical">
          <FontAwesomeIcon
            className="criticalIcon"
            icon={faExclamationCircle}
          />
          {err}
        </div>
      );
    }
  }

  validateSymbols() {
    const name = this.state.name.value.trim();
    const err = " Special characters besides [space] and [-] will be removed";
    const symbols = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/g;
    if (symbols.test(name))
      return (
        <div className="warning">
          <FontAwesomeIcon
            className="warningIcon"
            icon={faExclamationTriangle}
          />
          {err}
        </div>
      );
  }

  removeSpecialChars() {
    const name = this.state.name.value.trim();
    return name.replace(/[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/g, "");
  }

  handleSubmit = (e, strat) => {
    e.preventDefault();
    const strategy = {
      title: strat,
    };
    fetch(`${config.API_ENDPOINT}/strategy`, {
      method: "POST",
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(strategy),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((strategy) => {
        this.context.addStrategy(strategy);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const nameError = this.validateName();
    const symbolError = this.validateSymbols();

    let strategyName = this.state.name.value;

    return (
      <section className="AddStrategy light">
        <h2 className="blue">Create a strategy</h2>
        <Form onSubmit={this.handleSubmit}>
          <div className="field inputs">
            <label htmlFor="strategy-name-input">Name</label>
            <input
              type="text"
              onChange={(e) => {
                this.updateName(e.currentTarget.value);
                strategyName = e.currentTarget.value;
              }}
              id="strategy-name-input"
              name="strategy-name"
            />
          </div>
          <div>
            {this.state.name.touched && <FormValidator message={nameError} />}
            {this.state.name.touched && <FormValidator message={symbolError} />}
          </div>
            <button
              className="red window buttons"
              type="submit"
              onClick={(e) => {
                strategyName = this.updateName(
                  this.removeSpecialChars(strategyName)
                );
                if (!nameError) this.handleSubmit(e, strategyName);
              }}
            >
              Add strategy
            </button>
        </Form>
      </section>
    );
  }
}
