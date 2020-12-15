import React, { Component } from "react";
import PostStatus from "./postStatus";
import PostComment from "./postComment";
import Slide from "../common/slide";
import Report from "../common/report";
import Image1 from "../../image/teamb1.png";
import Image2 from "../../image/teamb2.jpg";
import Image3 from "../../image/teamb3.jpg";
import Reaction from "../common/reaction";

class PostDetail extends Component {
  state = {
    name: "Nguyen Duc Anh",
    address: "158/65 Đường số 9, Phường 9, Quận Gò Vấp, Hồ Chí Minh",
    phone: 913696081,
    price: 2,
    acreage: 18,
    expiration: "06/12/20",
    update: "01/12/20",
    images: [Image1, Image2, Image3],
  };

  render() {
    return (
      <div className="container">
        <div className="w-100 p-1"></div>
        <div className="w-50 bg-white border rounded p-4 ml-5 mt-5">
          <PostStatus></PostStatus>
        </div>
        <div
          id="common"
          className="w-100 mt-5 mb-5 bg-white p-4 border rounded d-flex flex-column"
        >
          <table className="table table-bordered w-100 p-4">
            <tbody>
              <tr>
                <td className="bg-light">Địa chỉ:</td>
                <td className="w-75">{this.state.address}</td>
              </tr>
              <tr>
                <td className="bg-light">Người đăng:</td>
                <td className="w-75">{this.state.name}</td>
              </tr>
              <tr>
                <td className="bg-light">Điện thoại:</td>
                <td className="w-75">{this.state.phone}</td>
              </tr>
              <tr>
                <td className="bg-light">Diện tích:</td>
                <td className="w-75">{this.state.acreage}</td>
              </tr>
              <tr>
                <td className="bg-light">Giá:</td>
                <td className="w-75">{this.state.price}</td>
              </tr>
              <tr>
                <td className="bg-light">Ngày cập nhật:</td>
                <td className="w-75">{this.state.update}</td>
              </tr>
              <tr>
                <td className="bg-light">Ngày hết hạn:</td>
                <td className="w-75">{this.state.expiration}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex block">
            <Reaction className="fa-thumbs-up fa-lg text-primary rounded mr-5 p-3 btn-light"></Reaction>
            <Reaction className="fa-heart fa-lg text-danger rounded mr-5 p-3 btn-light"></Reaction>
            <Report></Report>
          </div>
        </div>

        <div id="details" className=" w-100 bg-white border rounded p-3 mb-4">
          <h5 className="text-info">Thông tin mô tả</h5>
          <div></div>
        </div>
        <div id="images" className="w-100 bg-white border rounded p-3 mb-5">
          <Slide images={this.state.images}></Slide>
        </div>
        <div className="bg-white border rounded p-2 w-75 mb-5">
          <PostComment></PostComment>
        </div>
        <div className="w-100 p-1"></div>
      </div>
    );
  }
}

export default PostDetail;
