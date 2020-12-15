import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { data, column } = props;
  return (
    <table className="table table-bordered shadow-sm bg-white text-center">
      <TableHeader column={column} />
      <TableBody data={data} column={column} />
    </table>
  );
};

export default Table;
