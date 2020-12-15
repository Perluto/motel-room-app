import React from "react";
import Joi from "joi-browser";
import Form from "../components/common/form/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", role: "" },
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
      username: Joi.string().required().label("Username"),
      password: Joi.string().required("Password"),
      role: Joi.boolean().required("Vai trò"),
    },
    ownerSchema: {
      username: Joi.string().required().label("Username"),
      password: Joi.string().required("Password"),
      role: Joi.boolean().required("Vai trò"),
      name: Joi.string().required().label("Name"),
      phone: Joi.string().length(10).required("Phone"),
      cardId: Joi.string().length(12).required("Card Id"),
      roomNumber: Joi.string().required("So nha"),
    },
    errors: {},
  };

  schema = this.state.defaultSchema;

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.data.role === true) {
      this.schema = this.state.ownerSchema;
      if (this.state.disabled !== false) this.setState({ disabled: false });
    } else {
      this.schema = this.state.defaultSchema;
      if (this.state.disabled !== true) this.setState({ disabled: true });
    }
    console.log(this.schema);
  }
  doSubmit = async () => {};

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
              {this.renderSelect("role", "Role", this.state.role)}
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
              <label htmlFor="city">
                Thanh pho/Tinh <span className="text-danger">(*)</span>
              </label>
              <input type="text" className="form-control" id="city"></input>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="district">
                Quan/Huyen <span className="text-danger">(*)</span>
              </label>
              <input type="text" className="form-control" id="district"></input>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="ward">
                Phuong/Xa <span className="text-danger">(*)</span>
              </label>
              <input type="text" className="form-control" id="ward"></input>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="street">
                Duong/Thon <span className="text-danger">(*)</span>
              </label>
              <input type="text" className="form-control" id="street"></input>
            </div>
            <div className="form-group col-md-2">
              {this.renderInput("number", "Số nhà", "text")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
