import React, { Component } from "react";

class AccordionSection extends Component {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div>
        <div
          className={this.props.color}
          onClick={onClick}
          style={{ cursor: "pointer" }}
        >
          {label}
          <div style={{ float: "right" }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && <li>{this.props.children}</li>}
      </div>
    );
  }
}

export default AccordionSection;
