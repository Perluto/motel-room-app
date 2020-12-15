import React, { Component } from "react";

class Notification extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="btn"
          id="myDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-bell fa-lg text-white position-relative">
            <span className="rounded-circle text-white notification position-absolute">
              1
            </span>
          </i>
        </div>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="myDropdown"
        ></div>
      </div>
    );
  }
}

export default Notification;
