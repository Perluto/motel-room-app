import React, { Component } from "react";
import Table from "../components/common/table/table";
import Pagination from "../components/common/pagination";
import lodash from "lodash";
import { formatDate } from "../utils/dateCalculate";

import postService from "../service/postService";
import auth from "../service/authService";
import roomService from "../service/roomService";
class ManagePost extends Component {
  state = {
    column: [
      { label: "Tên bài", key: "postName" },
      { label: "Ngày đăng", key: "postedDate" },
      { label: "Ngày hết hạn", key: "dueDate" },
      { label: "Trạng thái", key: "isConfirm" },
      { label: "Tình trạng", key: "status" },
      { label: "Cập nhật", key: "btn update" },
    ],
    data: [],
    currentPage: 1,
  };

  componentDidMount() {
    postService.getPostByUser(auth.getCurrentUser()._id).then((res) => {
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
        tmp.isConfirm = tmp.isConfirm ? "Đã xác nhận" : "Chưa xác nhận";
        tmp.status = e.idRoomRef.status ? "Đã thuê" : "Chưa thuê";
        tmp.isHire = e.idRoomRef.status;
        tmp.idRoomRef = e.idRoomRef._id;
        data.push(tmp);
      });

      this.setState({ data });
    });
  }

  update(data) {
    roomService
      .updateRoom(data.idRoomRef, { status: !data.isHire })
      .then((res) => {
        alert("Done");
        window.location = "/manage-post";
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
        <h3 className="ml-5 text-dark p-2 mb-3">Quản lý phòng thuê</h3>
        <div className="container p-3 bg-white shadow rounded">
          <Table
            column={this.state.column}
            data={this.state.data}
            handleClick={this.update}
          ></Table>
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
