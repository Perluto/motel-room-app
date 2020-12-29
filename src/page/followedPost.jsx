import React, { Component } from "react";
import Table from "../components/common/table/table";
import Pagination from "../components/common/pagination";
import lodash from "lodash";
import { formatDate } from "../utils/dateCalculate";

import trendingService from "../service/trendingService";
import auth from "../service/authService";

class FollowedPosts extends Component {
  state = {
    column: [
      { label: "Tên bài", key: "postName" },
      { label: "View", key: "view" },
      { label: "Like", key: "like" },
      { label: "Follow", key: "follow" },
      { label: "Ngày đăng", key: "postedDate" },
    ],
    data: [],
  };

  componentDidMount() {
    trendingService.getPostFollowed(auth.getCurrentUser()._id).then((res) => {
      let data = [];
      res.data.forEach((e) => {
        const tmp = lodash.pick(e["idPostRef"], [
          "postedDate",
          "postName",
          "view",
          "like",
          "follow",
          "_id",
        ]);
        tmp.postedDate = formatDate(tmp.postedDate);

        data.push(tmp);
      });
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className="pt-4">
        <h3 className="ml-5 text-dark p-2 mb-3">Danh sách yêu thích</h3>
        <div className="container p-3 bg-white shadow rounded">
          <Table column={this.state.column} data={this.state.data}></Table>
        </div>
      </div>
    );
  }
}

export default FollowedPosts;
