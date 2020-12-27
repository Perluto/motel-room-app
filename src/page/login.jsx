import React from "react";
import Joi from "joi-browser";
import Form from "../components/common/form/form";
import auth from "../service/authService";
import { Link, Redirect } from "react-router-dom";

class Login extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().min(6).required().label("Username"),
    password: Joi.string().min(6).required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      
      await auth.login(data.username, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <div className="bg-white rounded shadow p-3 login">
          <h1 className="mb-3">Login</h1>
          <div className="div-group">
            {this.renderInput("username", "Username", "text")}
            {this.renderInput("password", "Password", "password")}
            <div className="d-flex justify-content-between mt-2">
              {this.renderBtn("Login")}
              <Link className="nav-link" to="/register">
                Đăng ký tài khoản
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
