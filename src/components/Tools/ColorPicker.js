import React from "react";
import reactCSS from "reactcss";
import { TwitterPicker } from "react-color";

import ApiContext from "../../contexts/ApiContext";

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: this.props.color,
  };

  static contextType = ApiContext;

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.props.setColor(color.rgb);
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      "default": {
        color: {
          width: "1em",
          height: "1em",
          borderRadius: "100px",
          border: "1px solid rgba(0,0,0,1)",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "1px",
          background: "#00000000",
          borderRadius: "3px",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2000",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <div className="swatch">
        <div
          color={this.props.color}
          style={styles.swatch}
          onClick={this.handleClick}
        >
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <TwitterPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
