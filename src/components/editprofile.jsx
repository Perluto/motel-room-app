import React from "react";
import Joi from "joi-browser";
import Form from "../components/common/form/form";

import addressService from '../service/addressService';
import { changeNameProps } from "../utils/changeNameProps";

class EditProfile extends Form{
    state = {
        data: { username: "", password: "", isOwner: "" },
        disabled: false,
        ownerSchema: {
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
        }
    schema = this.state.ownerSchema;
    componentDidMount() {
        addressService.getCity().then((res) => {
          let city = changeNameProps(res.data, "_id", "value");
          city = changeNameProps(city, "name", "label");
          this.setState({ city });
        });
    }
    
    componentDidUpdate(prevProps,prevState) {

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
            {this.renderBtn("Submit")}
        </div>
        )
    }
}

export default EditProfile;