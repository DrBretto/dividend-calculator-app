import React, { Component } from "react";
import ApiContext from "../../contexts/ApiContext";
import config from "../../config";
import Form from "../Tools/Form";
import TokenService from "../../services/token-service";
//! ---------  needs to check for duplicates
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
    return (
      <section className="AddStrategy">
        <h2 className="blue">Create a strategy</h2>
        <Form onSubmit={this.handleSubmit}>
          <div className="field inputs">
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
