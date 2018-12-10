import React, { Component } from "react";
import "../css/Table.css";

class Table extends Component {
  render() {
    return (
      <div className="wrapper">
        <table className="checks-table">
          <thead className="table-heading">
            <tr className="table-heading-row">
              <th className="check-amount-column">Check Amount</th>
              <th className="percentage-saved-column">Percentage Saved</th>
              <th className="amount-saved-column">Savings</th>
              <th className="remove-check-column">Remove Check</th>
            </tr>
            <tr className="sample-table-row">
              <td>$100</td>
              <td>10%</td>
              <td>$10</td>
              <td>X</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Table;
