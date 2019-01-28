import React, { Component } from "react";

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
