import React, { Component } from "react";
import Table from "../components/common/table/table";
import Pagination from "../components/common/pagination";
class ManagePost extends Component {
  state = {
    column: [
      { label: "Tên bài", key: "name" },
      { label: "Ngày đăng", key: "postedDate" },
      { label: "Ngày hết hạn", key: "dueDate" },
      { label: "Trạng thái", key: "status" },
      { label: "Gia hạn", key: "btn" },
    ],
    data: [
      {
        _id: "1",
        name: "Test",
        postedDate: "15/01/2000",
        dueDate: "15/01/2020",
        status: "Chua xac dinh",
      },
      {
        _id: "2",
        name: "Test",
        postedDate: "15/01/2000",
        dueDate: "15/01/2020",
        status: "Chua xac dinh",
      },
      {
        _id: "3",
        name: "Test",
        postedDate: "15/01/2000",
        dueDate: "15/01/2020",
        status: "Chua xac dinh",
      },
    ],
    currentPage: 1,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="pt-4">
        <h3 className="ml-5 text-dark p-2 mb-3">Quản lý bài đăng</h3>
        <div className="container p-3 bg-white shadow rounded">
          <Table column={this.state.column} data={this.state.data}></Table>
          <Pagination
            itemTotal={this.state.data.length}
            pageSize={2}
            currentPage={1}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default ManagePost;
