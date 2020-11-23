import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
    test: [
      { _id: 1, name: "1" },
      { _id: 2, name: "2" },
      { _id: 3, name: "3" },
      { _id: 4, name: "4" },
    ],
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    test: Joi.string().required().label("Test"),
    radio: Joi.boolean().label("Radio"),
  };

  render() {
    return (
      <div>
        <form className="form-group">
          {this.renderInput("username", "Username", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSelect("test", "test", this.state.test)}
          {this.renderRadio("Test1", "Test1", null)}
          {this.renderBtn("Login")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
