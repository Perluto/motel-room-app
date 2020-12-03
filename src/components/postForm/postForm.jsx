import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { Redirect } from "react-router-dom";
import InfoOwner from "./infoOwner";
import MotelResForm from "./motelResForm";

class PostForm extends Form {
  state = {
    data: {
      address: "",
      idRoomType: "",
      idUser: "",
      price: "",
      area: "",
      image: [],
    },
    roomType: [],
    errors: {},
  };

  schema = {
    idRoomType: Joi.string().required().label("Room Type"),
    price: Joi.number().min(0).required().label("Price"),
    area: Joi.number().min(10).required().label("Area"),
  };

  doSubmit = async () => {};

  render() {
    return (
      <div>
        <MotelResForm></MotelResForm>
        <InfoOwner></InfoOwner>
        {this.renderBtn("Dang Tin")}
      </div>
    );
  }
}

export default PostForm;
