import React, { Component } from "react";
import Button from "./Button";
import { convertPercentage } from "../helpers";
import { numberWithCommas } from "../helpers";

class TableEntry extends Component {
  render() {
    const checkAmount = this.props.checkAmount;
    const percentage = this.props.percentage;

    return (
      <React.Fragment>
        <tr className="entry">
          <td>${numberWithCommas(checkAmount)}</td>
          <td>{percentage}%</td>
          <td className="savings-class">
            ${numberWithCommas(convertPercentage(checkAmount, percentage))}
          </td>
          <td>
            <Button
              buttonFunc={this.props.deleteCheck}
              buttonName="&times;"
              id={this.props.id}
            >
              &times;
            </Button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default TableEntry;
