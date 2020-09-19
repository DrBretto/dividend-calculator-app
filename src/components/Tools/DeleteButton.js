import React, { Component } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import ApiContext from "../../contexts/ApiContext";

export default class DeleteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };
  }

  static contextType = ApiContext;

  toggleMenu = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  handleDelete = () =>{

  };

  render() {
    return (
      <div className="delete red window">
        {!this.state.isHidden && (
          <FaCheck className="green confirm" 
          onClick={this.handleDelete} />
        )}
        {!this.state.isHidden && <h4>{"<-----"} Confirm</h4>}

        <FaTimes onClick={this.toggleMenu} />
      </div>
    );
  }
}
