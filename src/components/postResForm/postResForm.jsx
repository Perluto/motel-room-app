import React from "react";
import Joi from "joi-browser";
import Form from "../common/form/form";
import { Redirect } from "react-router-dom";
import InfoOwner from "./infoOwner";

class PostForm extends Form {
  state = {
    data: {
      id_duong_ref: "",
      id_quan_ref: "",
      id_city_ref: "",
      phuong: "",
      number: "",
      id_room_type_ref: "",
      id_user: "",
      related_area: "",
      room_number: "",
      price: "",
      area: "",
      status: "",
      isWithOwner: "",
      bathroom: "",
      kitchen: "",
      water_heater: "",
      air_condition: "",
      balcony: "",
      electricity_price: "",
      water_price: "",
      other: "",
      image: [],
    },
    roomType: [
      { label: "Phòng Trọ", value: "Phòng Trọ" },
      { label: "Chung Cư Mini", value: "Chung Cư Mini" },
      { label: "Nhà Nguyên Căn", value: "Nhà Nguyên Căn" },
      { label: "Chung Cư Nguyên Căn", value: "Chung Cư Nguyên Căn" },
    ],
    errors: {},
  };

  schema = {
    id_duong_ref: Joi.string().required().label("Đường"),
    id_quan_ref: Joi.string().required().label("Quận"),
    id_city_ref: Joi.string().required().label("Thành phố"),
    phuong: Joi.string().required().label("Phường"),
    number: Joi.string().required().label("Số nhà"),
    id_room_type_ref: Joi.string().required().label("Loại phòng"),
    related_area: Joi.string().label("Các nơi liên quan"),
    room_number: Joi.number().min(1).required().label("Số phòng"),
    price: Joi.number().min(0).required().label("Giá phòng"),
    area: Joi.number().min(10).required().label("Diện tích"),
    isWithOwner: Joi.boolean().required().label("Chung chủ"),
    bathroom: Joi.string().required().label("Phòng tắm"),
    kitchen: Joi.string().required().label("Phòng bếp"),
    air_condition: Joi.boolean().required().label("Điều hòa"),
    water_heater: Joi.boolean().required().label("Bình nóng lạnh"),
    balcony: Joi.boolean().required().label("Ban công"),
    electricity_price: Joi.number().min(0).required().label("Giá điện"),
    water_price: Joi.number().min(0).required().label("Giá điện"),
    other: Joi.string().label("Tiện ích khác"),
  };

  doSubmit = async () => {};

  updateData(data) {
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <div className="border border-info rounded p-4 mt-4">
          <h5 className="card-title text-info">Thông tin phòng trọ</h5>
          <div className="form-row ml-1">
            <div className="form-group col-md-3">
              <label htmlFor="city">
                Thanh pho/Tinh <span className="text-danger">(*)</span>
              </label>
              <input type="text" className="form-control" id="city"></input>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="district">
                Quan/Huyen <span className="text-danger">(*)</span>
              </label>
              <input type="text" className="form-control" id="district"></input>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="street">
                Duong/Thon <span className="text-danger">(*)</span>
              </label>
              <input type="text" className="form-control" id="street"></input>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="ward">
                Phuong/Xa <span className="text-danger">(*)</span>
              </label>
              <input type="text" className="form-control" id="ward"></input>
            </div>
            <div className="form-group col-md-2">
              {this.renderInput("number", "Số nhà", "text")}
            </div>
            <div className="form-group col-md-7">
              {this.renderInput(
                "related_area",
                "Gần những đia điểm công cộng",
                "text"
              )}
            </div>
            <div className="form-group col-md-3"></div>
            <div className="form-group col-md-3">
              {this.renderSelect(
                "id_room_type_ref",
                "Loại phòng",
                this.state.roomType
              )}
            </div>
            <div className="form-group col-md-1">
              {this.renderInput("room_number", "Số phòng", "text")}
            </div>
            <div className="form-group col-md-2">
              {this.renderInput("area", "Diện tích", "number")}
            </div>
            <div className="form-group col-md-2">
              {this.renderInput("price", "Giá cả", "number")}
            </div>
          </div>
          <h6 className="card-title text-info">Điều kiện cơ sở vật chất</h6>
          <div className="form-row ml-1">
            <div className="form-group col-md-6">
              <label htmlFor="bathroom">Phòng tắm</label>
              <input type="text" className="form-control" id="bathroom"></input>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="kitchen">Phòng bếp</label>
              <input type="text" className="form-control" id="kitchen"></input>
            </div>
            <div className="form-group col-md-3">
              {this.renderInput(
                "electricity_price",
                "Giá điện (kW/h)",
                "number"
              )}
            </div>
            <div className="form-group col-md-3">
              {this.renderInput("water_price", "Giá nước (m3)", "number")}
            </div>
            <div className="form-group col-md-12">
              {this.renderRadio("water_heater", "Bình nóng lạnh")}
            </div>
            <div className="form-group col-md-12">
              {this.renderRadio("air_condition", "Điều hòa")}
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
            <div className="form-group">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                multiple
              />
            </div>
          </div>
        </div>
        <InfoOwner></InfoOwner>
        {this.renderBtn("Dang Tin")}
      </div>
    );
  }
}

export default PostForm;
