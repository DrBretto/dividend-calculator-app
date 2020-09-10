import React from "react";

export default class Stock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    return (
      <div className="blue window">
        <h3 onClick={this.toggleMenu}> {this.props.label}</h3>
        {!this.state.isHidden && <div className="red window">testing</div>}
      </div>
    );
  }
}
