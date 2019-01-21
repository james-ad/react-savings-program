import React, { Component } from "react";
import "./App.css";
import CheckInput from "./components/CheckInput";
import Header from "./components/Header";
import SavingsTotal from "./components/SavingsTotal";
import Table from "./components/Table";

class App extends Component {
  state = {
    currentCheckAmount: 100,
    currentPercentage: 10,
    savingsAccount: {
      check1: {
        check: 100,
        percentage: 10
      },
      check2: {
        check: 200,
        percentage: 20
      }
    }
  };

  clearCheckHistory = () => {
    const savingsAccount = { ...this.state.savingsAccount };
    Object.keys(savingsAccount).forEach(entry => {
      delete savingsAccount[entry];
    });
    this.setState({ savingsAccount });
  };

  deleteCheck = check => {
    // 1. Find the selected check by matching id against the key in the savings account
    const savingsAccount = { ...this.state.savingsAccount };
    delete savingsAccount[check.currentTarget.id];
    this.setState({ savingsAccount });
  };

  depositCheck = (check, percentage) => {
    const timestamp = `check#${Date.now()}`;
    const checkInfo = {
      check: parseFloat(this.state.currentCheckAmount).toFixed(2),
      percentage: parseInt(this.state.currentPercentage)
    };
    // 1. Make a copy of state
    const savingsAccount = { ...this.state.savingsAccount };
    // 2. Submit data to state copy
    savingsAccount[timestamp] = checkInfo;
    // 3. Update state
    this.setState({ savingsAccount });
  };

  renderSavingsTotal = () => {
    const account = this.state.savingsAccount;
    return Object.keys(account).reduce(function(a, b) {
      return a + account[b].check * account[b].percentage * 0.01;
    }, 0);
  };

  updateCheckValue = currentCheckAmount => {
    this.setState({ currentCheckAmount });
  };

  updatePercentageValue = currentPercentage => {
    this.setState({ currentPercentage });
  };

  render() {
    return (
      <div id="app-wrapper">
        <Header />
        <CheckInput
          currentCheckAmount={this.state.currentCheckAmount}
          deleteCheck={this.deleteCheck}
          depositCheck={this.depositCheck}
          currentPercentage={this.state.currentPercentage}
          updateCheckValue={this.updateCheckValue}
          updatePercentageValue={this.updatePercentageValue}
        />
        <Table
          currentCheckAmount={this.state.currentCheckAmount}
          deleteCheck={this.deleteCheck}
          depositCheck={this.depositCheck}
          currentPercentage={this.state.currentPercentage}
          savingsAccount={this.state.savingsAccount}
        />
        <SavingsTotal
          clearCheckHistory={this.clearCheckHistory}
          renderSavingsTotal={this.renderSavingsTotal}
        />
      </div>
    );
  }
}

export default App;
