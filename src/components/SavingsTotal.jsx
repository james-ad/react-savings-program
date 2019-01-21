import React, { Component } from "react";
import "../css/SavingsTotal.css";
import Button from "./Button";
import { numberWithCommas } from "../helpers";

class SavingsTotal extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Savings Total</h2>
        <div className="total-savings-readout">
          ${numberWithCommas(this.props.renderSavingsTotal().toFixed(2))}
        </div>
        <Button
          buttonFunc={this.props.clearCheckHistory}
          buttonName="Clear Check Button"
        />
      </div>
    );
  }
}

export default SavingsTotal;
