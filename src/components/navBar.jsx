import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import Notification from "../page/notification";
class Navbar extends Component {
  state = {
    options: {
      renter: [],
      owner: [
        { label: "Trang chủ", link: "/home", className: "nav-item nav-link" },
        {
          label: "Đăng bài",
          link: "/create-post",
          className: "nav-item nav-link",
        },
        {
          label: "Quản lý bài đăng",
          link: "/manage-post",
          className: "nav-item nav-link",
        },
        {
          label: "Quản lý phòng thuê",
          link: "/manage-room",
          className: "nav-item nav-link",
        },
        {
          label: " Thông báo",
          link: "/notifications",
          className: "nav-item nav-link",
        },
      ],
      admin: [],
    },
    userDropdown: [
      { path: "/profile", className: "", label: "Profile" },
      { path: "/change-password", className: "", label: "Change Password" },
      { path: "/logout", className: "", label: "Logout" },
    ],
  };

  componentDidMount() {}

  render() {
    const data = this.state.options["owner"];

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <NavLink className="navbar-brand" to="/">
          Phong Tro
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavBar"
          aria-controls="myNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavBar">
          <div className="navbar-nav">
            {data.map((e, index) => {
              return (
                <NavLink key={index} className={e["className"]} to={e["link"]}>
                  {e["label"]}
                </NavLink>
              );
            })}
          </div>
          <div className="nav navbar-nav ml-auto justify-content-end">
            <NavLink className="nav-item" to="#">
              <Notification></Notification>
            </NavLink>
            <NavLink className="nav-item mr-1" to="#">
              <Dropdown
                icon="fas fa-user-circle fa-lg text-light"
                data={this.state.userDropdown}
              ></Dropdown>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
