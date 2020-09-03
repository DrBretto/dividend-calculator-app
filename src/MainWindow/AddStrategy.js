import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from "../config";
import Form from "./Form";
import TokenService from "../Utilities/token-service";

export default class AddStrategy extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = ApiContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const strategy = {
      title: e.target["strategy-name"].value,
      stocks: [],
    };
    fetch(`${config.API_ENDPOINT}/strategy`, {
      method: "POST",
      headers: {
        "Authorization": `basic ${TokenService.getAuthToken()}`,
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
    return (
      <section className="AddStrategy">
        <h2>Create a strategy</h2>
        <Form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="strategy-name-input">Name</label>
            <input type="text" id="strategy-name-input" name="strategy-name" />
          </div>
          <div className="buttons">
            <button type="submit">Add strategy</button>
          </div>
        </Form>
      </section>
    );
  }
}
