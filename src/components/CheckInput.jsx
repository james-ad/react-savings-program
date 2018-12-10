import React, { Component } from "react";
import "../css/CheckInput.css";
import Button from "./Button";

class CheckInput extends Component {
  render() {
    return (
      <div name="wrapper" id="wrapper">
        {/* 1. Number input  */}
        <input
          type="number"
          name="check-input-amount"
          id="check-input-amount"
          placeholder="$100"
        />
        {/* 2. Range input  */}
        <input
          type="range"
          name="check-input-percentage"
          id="check-input-percentage"
        />
        {/* 3. Percentage readout/div  */}
        <div className="check-percentage-readout">10 %</div>
        {/* 4. Number readout/div */}
        <div className="amount-of-check-saved">$10</div>
        <Button buttonName="Deposit Check" />
      </div>
    );
  }
}

export default CheckInput;
