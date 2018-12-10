import React, { Component } from "react";
import "../css/Button.css";

class Button extends Component {
  render() {
    return (
      <div id="wrapper">
        <button className="app-button">{this.props.buttonName}</button>
      </div>
    );
  }
}

export default Button;
