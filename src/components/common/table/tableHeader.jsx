import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <thead className="table-info">
        <tr>
          <th key="index">#</th>
          {this.props.column.map((col) => (
            <th key={col.key || col.label}>{col.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
