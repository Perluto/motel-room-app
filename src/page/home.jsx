import React, { Component } from "react";
import PostShortcut from "../components/postForm/postShortcut";
import Search from "../components/common/search";
import Image1 from "../image/teamb1.png";
import Pagination from "../components/common/pagination";
import postService from "../service/postService";
import lodash from "lodash";
import { formatDate } from "../utils/dateCalculate";
class Home extends Component {
  state = {
    data: [],
    currentPage: 1,
  };

  componentDidMount() {
    postService.getConfirmedRoom().then((res) => {
      let data = [];
      res.data.forEach((e) => {
        console.log(e);
        const tmp = lodash.pick(e, ["_id", "postName"]);

        tmp.area = e.idRoomRef.area;
        tmp.price = e.idRoomRef.price;
        tmp.image = Image1; //e.idRoomRef.image[0];
        tmp.isHire = e.idRoomRef.status ? "Đã có người thuê" : "Chưa có ai thuê";
        data.push(tmp);
      });
      this.setState({ data });
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="d-flex flex-column">
        <div className="d-flex pt-5">
          <div className="w-25 mr-1 ml-1">
            <Search></Search>
          </div>
          <div className="w-75 ml-1 mr-1 border border-light rounded bg-white shadow">
            <h4 className="ml-5 mt-5">
              <strong className="text-danger">Trending</strong>
            </h4>
            <div className="jumbotron bg-white">
              <div className="row">
                {data.map((e) => {
                  return <PostShortcut data={e}></PostShortcut>;
                })}
              </div>
              <Pagination
                itemTotal={data.length}
                pageSize={2}
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange}
              ></Pagination>
            </div>
          </div>
        </div>
        <div className="p-5 mt-5 order border-light rounded bg-white shadow m-2">
          Test
        </div>
      </div>
    );
  }
}

export default Home;
