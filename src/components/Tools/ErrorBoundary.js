import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Great! You broke it!{" "}
          <p>
            (Don't worry, I'm sure this was my fault! I will look into a fix. In
            the meantime, please use your back button and try again.){" "}
          </p>
        </h1>
      );
    }
    return this.props.children;
  }
}
