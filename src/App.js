import React, { Component } from "react";
import "./App.css";
import CheckInput from "./components/CheckInput";
import Header from "./components/Header";
import SavingsTotal from "./components/SavingsTotal";
import Table from "./components/Table";

class App extends Component {
  state = {
    checkAmount: 100,
    percentage: 10
  };
  render() {
    return (
      <div id="app-wrapper">
        <Header />
        <CheckInput />
        <Table />
        <SavingsTotal />
      </div>
    );
  }
}

export default App;
