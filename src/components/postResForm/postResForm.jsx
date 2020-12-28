import React from "react";
import Form from "../common/form/form";
import { Redirect } from "react-router-dom";
import InfoOwner from "./infoOwner";
import { changeImgToBase64 } from "../../utils/changeImageToBase64";
import Joi from "joi-browser";

import {
  schemaPostForm,
  kitchen,
  bathroom,
  defaultData,
  period,
} from "./schemaPostForm";

import addressService from "../../service/addressService";
import roomService from "../../service/roomService";
import postService from "../../service/postService";
import auth from "../../service/authService";

import { changeNameProps } from "../../utils/changeNameProps";
import { dateCalculate, formatDate } from "../../utils/dateCalculate";

class PostForm extends Form {
  state = {
    data: {
      idWardRef: "",
      idDistrictRef: "",
      idCityRef: "",
      street: "",
      number: "",
      idRoomTypeRef: "",
      idUserRef: "",
      relatedArea: "",
      roomNumber: "",
      price: "",
      area: "",
      status: "",
      isWithOwner: "",
      bathroom: "",
      kitchen: "",
      waterHeater: "",
      airCondition: "",
      balcony: "",
      electricityPrice: "",
      waterPrice: "",
      other: "",
      image: [],
      postName: "",
      duration: null,
      period: "",
    },

    user: null,
    roomType: [],
    bathroom: [],
    kitchen: [],
    defaultData: [],
    city: [],
    district: [],
    ward: [],
    period: [],
    errors: {},
  };

  schema = schemaPostForm;

  doSubmit = async () => {
    const { data } = this.state;

    const user = auth.getCurrentUser();
    const address = {
      idWardRef: data.idWardRef,
      idDistrictRef: data.idDistrictRef,
      idCityRef: data.idCityRef,
      street: data.street,
      number: data.number,
    };

    const facilities = {
      bathroom: data.bathroom,
      kitchen: data.kitchen,
      waterHeater: data.waterHeater,
      airCondition: data.airCondition,
      balcony: data.balcony,
      electricityPrice: data.electricityPrice,
      waterPrice: data.waterPrice,
      other: data.other,
    };

    Promise.all([
      addressService.addAddress(address),
      roomService.addFacilities(facilities),
    ])
      .then((res) => {
        const post = {
          idAddressRef: res[0].data,
          idUserRef: user._id,
          idRoomTypeRef: data.idRoomTypeRef,
          roomNumber: data.roomNumber,
          price: data.price,
          area: data.area,
          idFacilitiesRef: res[1].data,
          image: data.image,
          isWithOwner: data.isWithOwner,
        };
        return roomService.addRoom(post);
      })
      .then((res) => {
        const post = {
          idUserRef: user._id,
          idRoomRef: res.data,
          postName: data.postName,
          postedDate: formatDate(Date.now()),
          dueDate: formatDate(dateCalculate(data.duration, data.period)),
        };
        return postService.addPost(post);
      })
      .then((res) => {
        alert("Done");
        window.location = "/";
      })
      .catch((err) => {
        alert("Error");
      });
  };

  componentDidMount() {
    this.setState({
      bathroom: bathroom,
      kitchen: kitchen,
      defaultData: defaultData,
      period: period,
    });

    addressService.getCity().then((res) => {
      let city = changeNameProps(res.data, "_id", "value");
      city = changeNameProps(city, "name", "label");
      this.setState({ city });
    });

    roomService.getRoomType().then((res) => {
      let roomType = changeNameProps(res.data, "_id", "value");
      roomType = changeNameProps(roomType, "name", "label");
      this.setState({ roomType });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
    if (data.idCityRef !== prevState.data.idCityRef) {
      addressService.getDistrict(data.idCityRef).then((res) => {
        let district = changeNameProps(res.data, "_id", "value");
        district = changeNameProps(district, "name", "label");
        this.setState({ district });
      });
    }

    if (data.idDistrictRef !== prevState.data.idDistrictRef) {
      addressService.getWard(data.idDistrictRef).then((res) => {
        let data = changeNameProps(res.data, "_id", "value");
        data = changeNameProps(data, "name", "label");
        this.setState({ ward: data });
      });
    }
  }

  render() {
    return (
      <div className="container pt-5">
        <div className="border border-info rounded p-4 bg-white shadow">
          <h5 className="card-title text-info">Thông tin phòng trọ</h5>
          <div className="form-row ml-1">
            <div className="form-group col-md-3">
              {this.renderSelect(
                "idCityRef",
                "Thành phố/Tỉnh",
                this.state.city
              )}
            </div>
            <div className="form-group col-md-3">
              {this.renderSelect(
                "idDistrictRef",
                "Quận/Huyện",
                this.state.district
              )}
            </div>
            <div className="form-group col-md-3">
              {this.renderSelect("idWardRef", "Phường/Xã", this.state.ward)}
            </div>
            <div className="form-group col-md-3">
              {this.renderInput("street", "Đường", "text")}
            </div>
            <div className="form-group col-md-2">
              {this.renderInput("number", "Số nhà", "text")}
            </div>
            <div className="form-group col-md-7">
              {this.renderInput(
                "relatedArea",
                "Gần những đia điểm công cộng",
                "text"
              )}
            </div>
            <div className="form-group col-md-3"></div>
            <div className="form-group col-md-3">
              {this.renderSelect(
                "idRoomTypeRef",
                "Loại phòng",
                this.state.roomType
              )}
            </div>
            <div className="form-group col-md-3">
              {this.renderSelect(
                "isWithOwner",
                "Chung chủ",
                this.state.defaultData
              )}
            </div>
            <div className="form-group col-md-1">
              {this.renderInput("roomNumber", "Số phòng", "text")}
            </div>
            <div className="form-group col-md-2">
              {this.renderInput("area", "Diện tích (m2)", "number")}
            </div>
            <div className="form-group col-md-2">
              {this.renderInput("price", "Giá cả (nghìn đồng)", "number")}
            </div>
          </div>
          <h6 className="card-title text-info">Điều kiện cơ sở vật chất</h6>
          <div className="form-row ml-1">
            <div className="form-group col-md-4">
              {this.renderSelect("bathroom", "Phòng tắm", this.state.bathroom)}
            </div>
            <div className="form-group col-md-4">
              {this.renderSelect("kitchen", "Phòng bếp", this.state.kitchen)}
            </div>
            <div className="form-group col-md-4"></div>
            <div className="form-group col-md-3">
              {this.renderInput(
                "electricityPrice",
                "Giá điện (nghìn đồng kW/h)",
                "number"
              )}
            </div>
            <div className="form-group col-md-3">
              {this.renderInput(
                "waterPrice",
                "Giá nước (nghìn đồng/m3)",
                "number"
              )}
            </div>
            <div className="form-group col-md-12">
              {this.renderRadio("waterHeater", "Bình nóng lạnh")}
            </div>
            <div className="form-group col-md-12">
              {this.renderRadio("airCondition", "Điều hòa")}
            </div>
            <div className="form-group col-md-12">
              {this.renderRadio("balcony", "Ban công")}
            </div>
            <div className="form-group col-md-12">
              {this.renderInput("other", "Tiện ích khác", "text")}
            </div>
          </div>
          <h6 className="card-title text-info">Hình ảnh</h6>
          <div className="form-row ml-1">
            <div className="form-group">{this.renderInputImage("image")}</div>
          </div>
        </div>
        <div className="border border-info rounded p-4 mt-4 mb-2 bg-white shadow">
          <h5 className="card-title text-info">Thông tin bài đăng</h5>
          <div className="form-row ml-1">
            <div className="form-group col-md-6">
              {this.renderInput("postName", "Tên bài đăng", "text")}
            </div>
            <div className="form-group col-md-6"></div>
            <div className="form-group col-md-2">
              {this.renderInput("duration", "Thời hạn", "number")}
            </div>
            <div className="form-group col-md-4">
              {this.renderSelect("period", "Chu kỳ", this.state.period)}
            </div>
          </div>
        </div>
        <InfoOwner data={this.state.user}></InfoOwner>
        {this.renderBtn("Dang Tin")}
      </div>
    );
  }
}

export default PostForm;
