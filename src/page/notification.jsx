import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/notification.css";

class Notification extends Component {
  state = {
    owner: [
      {
        name: "Đức Anh",
        date: "30.12.2020",
      },
      {
        name: "Hoàng",
        date: "29.12.2020",
      },
      {
        name: "Đức",
        date: "28.12.2020",
      },
      {
        name: "Đức Anh",
        date: "17.12.2020",
      },
    ],
  };
  render() {
    var notices = this.state.owner.map((e, index) => {
      return (
        <div>
          <div className="dropdown-item notification-box">
            <div class="row">
              <div class="col-6">
                <NavLink className="nav-item nav-link" to="#">
                  <strong className="text-info">{e.name}</strong>
                  <p className="text-danger">Yêu cầu được đăng bài</p>
                  <small className="text-warning">{e.date}</small>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="dropdown-divider"></div>
        </div>
      );
    });
    return (
      <div>
        <div
          className="btn"
          id="myDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-bell fa-lg text-white position-relative"></i>
        </div>

        <div
          className="dropdown-menu dropdown-menu-right dropdown-notice overflow-auto"
          aria-labelledby="myDropdown"
        >
          <div className="head text-light bg-primary">
            <div className="row">
              <div className="col-6">
                <h4>
                  <strong>Notifications</strong>
                </h4>
              </div>
            </div>
          </div>
          {notices}
        </div>
      </div>
    );
  }
}

export default Notification;
