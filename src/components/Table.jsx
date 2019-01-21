import React, { Component } from "react";
import "../css/Table.css";
import TableEntry from "./TableEntry";

class Table extends Component {
  tableBody = React.createRef();
  deleteButton = React.createRef();
  renderTableEntry = () => {
    const savingsAccount = this.props.savingsAccount;
    return Object.keys(this.props.savingsAccount).map(entry => {
      return (
        <TableEntry
          deleteCheck={this.props.deleteCheck}
          id={entry}
          checkAmount={savingsAccount[entry].check}
          percentage={savingsAccount[entry].percentage}
        />
      );
    });
  };
  componentDidMount() {
    this.renderTableEntry();
  }
  componentDidUpdate() {
    this.renderTableEntry();
  }

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
          </thead>
          <tbody ref={this.tableBody} id="table-body">
            {this.renderTableEntry()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
