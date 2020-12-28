import React, { Component } from "react";
import Table from "../components/common/table/table";
import Pagination from "../components/common/pagination";
import lodash from "lodash";
import { formatDate } from "../utils/dateCalculate";

import postService from "../service/postService";

class ManageOwner extends Component {
  state = {
    column: [
      { label: "username", key: "username" },
      { label: "Trạng thái", key: "status" },
      { label: "Duyệt", key: "btn confirm" },
    ],
    data: [],
    currentPage: 1,
  };

  componentDidMount() {
    postService.getAll().then((res) => {
      let data = [];
      res.data.forEach((e) => {
        const tmp = lodash.pick(e, [
          "_id",
          "postName",
          "postedDate",
          "dueDate",
          "isConfirm",
        ]);

        tmp.postedDate = formatDate(tmp.postedDate);
        tmp.dueDate = formatDate(tmp.dueDate);
        tmp.status = tmp.isConfirm ? "Đã xác nhận" : "Chưa xác nhận";

        data.push(tmp);
      });

      this.setState({ data });
    });
  }

  confirm(data) {
    postService
      .updateStatusPost(data._id, { isConfirm: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="pt-4">
        <h3 className="ml-5 text-dark p-2 mb-3">Quản lý bài đăng</h3>
        <div className="container p-3 bg-white shadow rounded">
          <Table
            column={this.state.column}
            data={this.state.data}
            handleClick={this.confirm}
          ></Table>
          <Pagination
            itemTotal={this.state.data.length}
            pageSize={2}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default ManageOwner;