import React, { Component } from "react";

class TableBody extends Component {
  renderCell = (e, col) => {
    if (col.key === "btn") {
      return <button className="btn btn-primary">{col.label}</button>;
    }
    return e[col.key];
  };

  createKey = (e, col) => {
    return "";
  };

  render() {
    const { data, column } = this.props;
    console.log(data);
    return (
      <tbody>
        {data.map((e, index) => {
          return (
            <tr key={e._id}>
              <td >{index}</td>
              {column.map((col) => (
                <td>{this.renderCell(e, col)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
