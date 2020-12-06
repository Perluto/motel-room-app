import React, { Component } from "react";
import PostStatus from "./postStatus";
import Image1 from "../../image/teamb1.png";
import Image2 from "../../image/teamb2.jpg";
import Image3 from "../../image/teamb3.jpg";

class PostDetail extends Component {
  state = {
    name: "Nguyen Duc Anh",
    address: "158/65 Đường số 9, Phường 9, Quận Gò Vấp, Hồ Chí Minh",
    phone: 913696081,
    price: 2,
    acreage: 18,
    expiration: "06/12/20",
    update: "01/12/20",
    image3: Image3,
    image1: Image1,
    image2: Image2,
  };

  render() {
    return (
      <div className="container">
        <PostStatus></PostStatus>
        <div id="common" className="mt-5">
          <table className="table table-bordered w-75">
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
        </div>
        <div id="details" className="border rounded p-2 w-75 mb-2">
          <h5 class="text-info">Thông tin mô tả</h5>
          <div></div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
