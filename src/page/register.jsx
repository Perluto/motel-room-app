import React from "react";
import Joi from "joi-browser";
import Form from "../components/common/form/form";

import addressService from "../service/addressService";
import userService from "../service/userService";
import { changeNameProps } from "../utils/changeNameProps";
import lodash from "lodash";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", isOwner: "" },
    role: [
      {
        label: "Người thuê trọ",
        value: false,
      },
      {
        label: "Chủ nhà trọ",
        value: true,
      },
    ],
    disabled: true,
    defaultSchema: {
      username: Joi.string().min(6).required().label("Username"),
      password: Joi.string().min(6).required("Password"),
      isOwner: Joi.boolean().required("Vai trò"),
    },

    ownerSchema: {
      username: Joi.string().min(6).required().label("Username"),
      password: Joi.string().min(6).required("Password"),
      isOwner: Joi.boolean().required("Vai trò"),
      name: Joi.string().required().label("Name"),
      phone: Joi.string().length(10).required("Phone"),
      cardId: Joi.string().length(10).required("Card Id"),
      idWardRef: Joi.string().required().label("Phường/Xã"),
      idDistrictRef: Joi.string().required().label("Quận/Huyện"),
      idCityRef: Joi.string().required().label("Thành phố/Tỉnh"),
      street: Joi.string().required().label("Đường"),
      number: Joi.string().required().label("Số nhà"),
    },
    city: [],
    district: [],
    ward: [],
    errors: {},
  };

  schema = this.state.defaultSchema;

  componentDidMount() {
    addressService.getCity().then((res) => {
      let city = changeNameProps(res.data, "_id", "value");
      city = changeNameProps(city, "name", "label");
      this.setState({ city });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data.isOwner === true) {
      this.schema = this.state.ownerSchema;
      if (this.state.disabled !== false) this.setState({ disabled: false });
    } else {
      this.schema = this.state.defaultSchema;
      if (this.state.disabled !== true) this.setState({ disabled: true });
    }

    const { data } = this.state;
    if (data.idCityRef && data.idCityRef !== prevState.data.idCityRef) {
      addressService.getDistrict(data.idCityRef).then((res) => {
        let district = changeNameProps(res.data, "_id", "value");
        district = changeNameProps(district, "name", "label");
        this.setState({ district });
      });
    }

    if (
      data.idDistrictRef &&
      data.idDistrictRef !== prevState.data.idDistrictRef
    ) {
      addressService.getWard(data.idDistrictRef).then((res) => {
        let data = changeNameProps(res.data, "_id", "value");
        data = changeNameProps(data, "name", "label");
        this.setState({ ward: data });
      });
    }
  }

  doSubmit = () => {
    const data = lodash.pick(this.state.data, Object.keys(this.schema));
    userService
      .addUser(data)
      .then((res) => {
        window.location = "/login";
      })
      .catch((ex) => {
        if (ex.response && ex.response.status === 400) {
          const errors = { ...this.state.errors };
          errors.username = ex.response.data;
          this.setState({ errors });
        }
      });
  };

  render() {
    const { disabled } = this.state;
    return (
      <div className="container d-flex pt-5">
        <div className="border border-info rounded p-4 bg-white shadow w-25">
          <h4 className="card-title text-info">Đăng ký</h4>
          <div className="form-row ml-1 mt-2">
            <div className="form-group">
              {this.renderInput("username", "Username", "text")}
              {this.renderInput("password", "Password", "password")}
              {this.renderSelect("isOwner", "Role", this.state.role)}
              {this.renderBtn("Đăng ký")}
            </div>
          </div>
        </div>
        <div className="border border-info rounded p-4 bg-white shadow w-75 ml-5">
          <h4 className="card-title text-info">Thông tin chủ phòng trọ</h4>
          <div className="text-danger">
            <small>
              <sup>*</sup> Bắt buộc nếu là chủ phòng trọ!
            </small>
          </div>
          <div className="form-row ml-1 mt-1">
            <div className="form-group col-md-5">
              {this.renderInput("name", "Name", "text", disabled)}
            </div>
            <div className="form-group col-md-3">
              {this.renderInput("phone", "Phone", "text", disabled)}
            </div>
            <div className="form-group col-md-4">
              {this.renderInput("cardId", "Card Id", "text", disabled)}
            </div>
            <div className="form-group col-md-4">
              {this.renderSelect(
                "idCityRef",
                "Thành phố/Tỉnh",
                this.state.city,
                disabled
              )}
            </div>
            <div className="form-group col-md-4">
              {this.renderSelect(
                "idDistrictRef",
                "Quận/Huyện",
                this.state.district,
                disabled
              )}
            </div>
            <div className="form-group col-md-4">
              {this.renderSelect(
                "idWardRef",
                "Phường/Xã",
                this.state.ward,
                disabled
              )}
            </div>
            <div className="form-group col-md-4">
              {this.renderInput("street", "Đường", "text", disabled)}
            </div>
            <div className="form-group col-md-2">
              {this.renderInput("number", "Số nhà", "text", disabled)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
