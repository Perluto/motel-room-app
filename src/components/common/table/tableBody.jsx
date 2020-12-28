import React, { Component } from "react";
import { Link } from "react-router-dom";

class TableBody extends Component {
  renderCell = (e, col) => {
    if (col.key === "btn confirm") {
      return (
        <button
          className="btn btn-primary"
          disabled={e.isConfirm}
          onClick={() => this.props.handleClick(e)}
        >
          {col.label}
        </button>
      );
    } else if (col.key === "btn update") {
      return (
        <button
          className="btn btn-primary"
          onClick={() => this.props.handleClick(e)}
        >
          {col.label}
        </button>
      );
    }
    return e[col.key];
  };

  render() {
    const { data, column } = this.props;
    return (
      <tbody>
        {data.map((e, index) => {
          return (
            <tr key={e._id}>
              <td>
                <Link to={`/posts/${e._id}`}>{index}</Link>
              </td>
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
