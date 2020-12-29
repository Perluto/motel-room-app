import React from "react";
import Joi from "joi-browser";
import Form from "../components/common/form/form";

import addressService from "../service/addressService";
import auth from "../service/authService";
import userService from "../service/userService";
import lodash from "lodash";
import { changeNameProps } from "../utils/changeNameProps";

class EditProfile extends Form {
  state = {
    data: {},
    disabled: false,
    updated: false,
    oldData: { name: "" },
    city: [],
    district: [],
    ward: [],
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    phone: Joi.string().length(10).required("Phone"),
    cardId: Joi.string().length(10).required("Card Id"),
    idWardRef: Joi.string().required().label("Phường/Xã"),
    idDistrictRef: Joi.string().required().label("Quận/Huyện"),
    idCityRef: Joi.string().required().label("Thành phố/Tỉnh"),
    street: Joi.string().required().label("Đường"),
    number: Joi.string().required().label("Số nhà"),
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ disabled: user.isConfirm });
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, updated } = this.state;
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

    if (!updated) {
      if (!(prevProps.data.idUserRef !== auth.getCurrentUser()._id)) {
        let tmp = prevProps.data;
        const newData = lodash.pick(tmp, ["name", "phone", "cardId"]);

        newData.street = tmp.address.street;
        newData.number = tmp.address.number;
        newData.idCityRef = tmp.address.idCityRef;
        newData.idDistrictRef = tmp.address.idDistrictRef;
        newData.idWardRef = tmp.address.idWardRef;

        this.setState({
          oldData: prevProps.data,
          updated: true,
          data: newData,
        });

        addressService.getCity().then((res) => {
          let city = changeNameProps(res.data, "_id", "value");
          city = changeNameProps(city, "name", "label");
          this.setState({ city });
        });
      }
    }
  }

  doSubmit() {
    let { data, oldData } = this.state;
    data = lodash.pick(data, ["name", "phone", "cardId"]);
    data.address = oldData.address._id;
    userService
      .changProfile(auth.getCurrentUser()._id, data)
      .then((res) => {
        alert("Done");
        window.location.reload();
      })
      .catch((err) => {
        alert("Error");
        window.location.reload();
      });
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <h4 className="card-title text-info">Thông tin chủ phòng trọ</h4>
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
        {disabled ? "" : this.renderBtn("Submit")}
      </div>
    );
  }
}

export default EditProfile;
