import React, { Component } from "react";
import Table from "../components/common/table/table";
import Pagination from "../components/common/pagination";
import lodash from "lodash";
import { formatDate } from "../utils/dateCalculate";

import postService from "../service/postService";

class ManagePost extends Component {
  state = {
    column: [
      { label: "Tên bài", key: "postName" },
      { label: "Ngày đăng", key: "postedDate" },
      { label: "Ngày hết hạn", key: "dueDate" },
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
        alert("Done");
        window.location="/manage-post"
      })
      .catch((err) => {
        alert("Error");
        window.location = "/manage-post";
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
        </div>
      </div>
    );
  }
}

export default ManagePost;
