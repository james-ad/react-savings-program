import React, { Component } from "react";
import "../css/Button.css";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          id={this.props.id}
          onClick={this.props.buttonFunc}
          className="app-button"
        >
          {this.props.buttonName}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
