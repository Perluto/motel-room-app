import React, { Component } from "react";
import Table from "../components/common/table/table";
import Pagination from "../components/common/pagination";
import lodash from "lodash";
import { formatDate } from "../utils/dateCalculate";

import userService from "../service/userService";

class ManageOwner extends Component {
  state = {
    column: [
      { label: "Tài khoản", key: "username" },
      { label: "Trạng thái", key: "status" },
      { label: "Duyệt", key: "btn confirm" },
    ],
    data: [],
    currentPage: 1,
  };

  componentDidMount() {
    userService.getAllOwner().then((res) => {
      const owner = [];
      res.data.forEach((e) => {
        let tmp = lodash.pick(e, ["_id", "username", "isConfirm"]);
        tmp.status = tmp.isConfirm ? "Đã xác nhận" : "Chưa xác nhận";
        owner.push(tmp);
      });
      this.setState({ data: owner });
    });
  }

  confirm(data) {
    userService
      .confirmOwner(data._id)
      .then((res) => {
        alert("Done");
        window.location = "/manage-owner";
      })
      .catch((err) => {
        alert("Error");
        window.location = "/manage-owner";
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

export default ManageOwner;
