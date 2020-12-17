import React from "react";
import Joi from "joi-browser";
import Form from "../components/common/form/form";
// import { Redirect } from "react-router-dom";

class Login extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required("Password"),
  };

  doSubmit = async () => {};

  render() {
    //if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <div className="bg-white rounded shadow p-3 login">
          <h1 className="mb-3">Login</h1>
          <form className="form-group">
            {this.renderInput("username", "Username", "text")}
            {this.renderInput("password", "Password", "password")}
            {this.renderBtn("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
