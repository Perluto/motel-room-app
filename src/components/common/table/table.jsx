import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  state = {};
  render() {
    return (
      <table className="table">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
