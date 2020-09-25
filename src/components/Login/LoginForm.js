import React, { Component } from "react";
import TokenService from "../../services/token-service";
import { Button, Input } from "../../utils/utils";
import AuthApiService from "../../services/auth-api-service";
import Context from "../../contexts/ApiContext";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  static contextType = Context;

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        console.log("LoginForm -> handleSubmitJwtAuth -> user_name.value", user_name.value)
        this.context.setLogin(true, user_name.value);
        user_name.value = "";
        password.value = "";
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div className="alert" role="alert">
          {error && <p className="red">{error}</p>}
        </div>

        <div className="inputs">
          <label htmlFor="LoginForm__user_name">User name:</label>
          <Input required name="user_name" id="LoginForm__user_name"></Input>
        </div>

        <div className="inputs">
          <label htmlFor="LoginForm__password">Password:</label>
          <Input
            required
            name="password"
            type="password"
            id="LoginForm__password"
          ></Input>
        </div>
        <Button className="red window" type="submit">
          Login
        </Button>
      </form>
    );
  }
}
