import React, { Component } from "react";
import PostStatus from "./postStatus";
import PostComment from "./postComment";
import Slide from "../common/slide";
import Report from "../common/report";
import Image1 from "../../image/teamb1.png";
import Image2 from "../../image/teamb2.jpg";
import Image3 from "../../image/teamb3.jpg";
import Reaction from "../common/reaction";

import lodash from "lodash";
import { formatDate } from "../../utils/dateCalculate";
import { formatAddress } from "../../utils/formatAddress";
import { formatFacilities } from "../../utils/formatFacilities";

import postService from "../../service/postService";
import roomService from "../../service/roomService";
import addressService from "../../service/addressService";
import userService from "../../service/userService";
class PostDetail extends Component {
  state = {
    post: {},
    room: {},
    address: "",
    facilities: {},
    owner: {},
    images: [Image1, Image2, Image3],
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;

    postService
      .getPostById(id)
      .then((res) => {
        const { idRoomRef: room } = res.data;
        let newRoom = lodash.pick(room, [
          "image",
          "isWithOwner",
          "price",
          "area",
          "roomNumber",
          "status",
        ]);
        let post = lodash.pick(res.data, [
          "view",
          "like",
          "follow",
          "postedDate",
          "dueDate",
          "postName",
        ]);

        this.setState({ post, room: newRoom });
        return Promise.all([
          roomService.getFacilities(room.idFacilitiesRef),
          addressService.getAddress(room.idAddressRef),
          userService.getOwnerById(room.idUserRef),
          roomService.getRoomTypeById(room.idRoomTypeRef),
        ]);
      })
      .then((res) => {
        let facilities = res[0].data;
        let address = formatAddress(res[1].data);
        let owner = lodash.pick(res[2].data, ["name", "phone"]);
        let roomType = res[3].data;
        let room = this.state.room;
        room.roomType = roomType.name;
        this.setState({ room });
        this.setState({ facilities });
        this.setState({ address });
        this.setState({ owner });
      });
  }

  render() {
    const { address, room, owner, facilities, post } = this.state;
    console.log(room);
    return (
      <div className="container">
        <div className="w-100 p-1"></div>
        <div className="w-50 bg-white border rounded p-4 ml-5 mt-5">
          <PostStatus data={post}></PostStatus>
        </div>
        <div
          id="common"
          className="w-100 mt-5 mb-5 bg-white p-4 border rounded d-flex flex-column"
        >
          <table className="table table-bordered w-100 p-4">
            <tbody>
              <tr>
                <td className="bg-light">Địa chỉ:</td>
                <td className="w-75">{address}</td>
              </tr>
              <tr>
                <td className="bg-light">Người đăng:</td>
                <td className="w-75">{owner.name}</td>
              </tr>
              <tr>
                <td className="bg-light">Điện thoại:</td>
                <td className="w-75">{owner.phone}</td>
              </tr>
              <tr>
                <td className="bg-light">Diện tích:</td>
                <td className="w-75">
                  {room.area} m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className="bg-light">Giá:</td>
                <td className="w-75">{room.price}.000 đồng/tháng</td>
              </tr>
              <tr>
                <td className="bg-light">Loại phòng:</td>
                <td className="w-75">{room.roomType}</td>
              </tr>
              <tr>
                <td className="bg-light">Ngày đăng:</td>
                <td className="w-75">{formatDate(post.postedDate)}</td>
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
          <div>{formatFacilities(facilities, room)}</div>
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
