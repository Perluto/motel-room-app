import React, { Component } from "react";
import PostShortcut from "../components/postForm/postShortcut";
import Search from "../components/common/search";
import Image1 from "../image/teamb1.png";
import Pagination from "../components/common/pagination";

class Home extends Component {
  state = {
    content: [
      {
        title: "Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ",
        price: 3,
        acreage: 14,
        address: "Quận 3, Hồ Chí Minh",
        p_content:
          "Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…",
        image1: Image1,
      },
      {
        title: "Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ",
        price: 3,
        acreage: 14,
        address: "Quận 3, Hồ Chí Minh",
        p_content:
          "Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…",
        image1: Image1,
      },
      {
        title: "Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ",
        price: 3,
        acreage: 14,
        address: "Quận 3, Hồ Chí Minh",
        p_content:
          "Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…",
        image1: Image1,
      },
      {
        title: "Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ",
        price: 3,
        acreage: 14,
        address: "Quận 3, Hồ Chí Minh",
        p_content:
          "Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…",
        image1: Image1,
      },
    ],
    currentPage: 1,
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    console.log(this.props);
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
                <PostShortcut data={this.state.content[0]}></PostShortcut>
                <PostShortcut data={this.state.content[1]}></PostShortcut>
                <PostShortcut data={this.state.content[2]}></PostShortcut>
                <PostShortcut data={this.state.content[0]}></PostShortcut>
                <PostShortcut data={this.state.content[0]}></PostShortcut>
                <PostShortcut data={this.state.content[0]}></PostShortcut>
              </div>
              <Pagination 
                itemTotal={this.state.content.length}
                pageSize={2}
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange}>
              </Pagination>
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
