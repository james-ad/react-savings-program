import React, { Component } from "react";
import "../css/SavingsTotal.css";
import Button from "./Button";

class SavingsTotal extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Savings Total</h2>
        <div className="total-savings-readout">$0.00</div>
        <Button buttonName="Clear Check Button" />
      </div>
    );
  }
}

export default SavingsTotal;
