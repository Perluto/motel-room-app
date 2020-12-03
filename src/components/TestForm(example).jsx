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
      { id: 1, value: "1", label: "1" },
      { id: 2, value: "2", label: "2" },
      { id: 3, value: "3", label: "3" },
      { id: 4, value: "4", label: "4" },
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
