import React, { Component } from "react";
import Button from "./Button";
import { convertPercentage } from "../helpers";
import { numberWithCommas } from "../helpers";

class CheckInput extends Component {
  currentCheckInput = React.createRef();
  percentageInput = React.createRef();
  percentageReadout = React.createRef();
  amountSaved = React.createRef();

  render() {
    const { currentCheckAmount, currentPercentage } = this.props;
    return (
      <div className="check-input-wrapper" name="wrapper" id="wrapper">
        {/* 1. Number input  */}
        <input
          type="number"
          name="check-input"
          id="check-input"
          ref={this.currentCheckInput}
          onKeyUp={event => {
            if (event.key === "Enter") this.props.depositCheck();
          }}
          onInput={() => {
            this.props.updateCheckValue(this.currentCheckInput.current.value);
          }}
          placeholder={"$" + currentCheckAmount}
        />
        {/* 2. Range input  */}
        <input
          type="range"
          name="check-input-percentage"
          id="check-input-percentage"
          defaultValue={currentPercentage}
          default={`${currentPercentage} %`}
          ref={this.percentageInput}
          onInput={() => {
            this.props.updatePercentageValue(
              this.percentageInput.current.value
            );
          }}
        />
        {/* 3. Percentage readout/div  */}
        <div id="check-percentage-readout" ref={this.percentageReadout}>
          {currentPercentage} %
        </div>
        {/* 4. Number readout/div */}
        <div className="amount-saved" ref={this.amountSaved}>
          $
          {numberWithCommas(
            convertPercentage(currentCheckAmount, currentPercentage)
          )}
        </div>
        <Button
          buttonName="Deposit Check"
          buttonFunc={this.props.depositCheck}
        />
      </div>
    );
  }
}

export default CheckInput;
