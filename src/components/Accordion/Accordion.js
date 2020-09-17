import React, { Component } from "react";
import PropTypes from "prop-types";

import AccordionSection from "../Accordion/AccordionSection";
import Context from "../../contexts/ApiContext";

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    const openSections = {};
    this.state = { openSections };
  }

  static contextType = Context;

  onClick = (label) => {
    const {
      state: { openSections },
    } = this;
    console.log("Accordion -> onClick -> openSections", openSections)
    const isOpen = !!openSections[label];
    if(!isOpen) this.context.setOpenStrat(label);
    else this.context.setOpenStrat("");
    
    this.setState({
      openSections: {
        [label]: !isOpen,
      },
    });
   
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <ul>
        {children.map((child, index) => (
          <AccordionSection
            key={index}
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
            color={this.props.color}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </ul>
    );
  }
}

export default Accordion;
