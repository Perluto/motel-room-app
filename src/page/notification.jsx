import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/notification.css";


class Notification extends Component {
  state = {
    owner: [{
      name: "Đức Anh",
      date: "16.12.2020"
    },
    {
      name: "Đức Anh",
      date: "16.12.2020"
    },
    {
      name: "Đức Anh",
      date: "16.12.2020"
    },
    {
      name: "Đức Anh",
      date: "16.12.2020"
    },
    {
      name: "Đức Anh",
      date: "16.12.2020"
    }]
  };
  render() {
    var notices = this.state.owner.map((e,index) => {
        return (
          <div>
            <div className="dropdown-item notification-box" >
              <div class="row">  
                <div class="col-6">
                  <NavLink className = "nav-item nav-link" to="#">
                      <strong className="text-info">{e.name}</strong>
                      <p className="text-danger">Yêu cầu được đăng bài</p>
                      <small className="text-warning">{e.date}</small>
                  </NavLink>
                </div>    
              </div>
            
            </div>
            <div class="dropdown-divider"></div>
          </div>
        )
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
          <i className="fas fa-bell fa-lg text-white position-relative">
            <span className="rounded-circle text-white notification position-absolute">
              {this.state.owner.length}
            </span>
          </i>
        </div>

        <div className="dropdown-menu dropdown-menu-right dropdown-notice overflow-auto" aria-labelledby="myDropdown">
            <div className="head text-light bg-dark">
              <div className="row">
                <div className="col-6">
                  <p>Notifications ({this.state.owner.length})</p>
                </div>
              </div>
            </div>
              {
                notices
              }     
          </div>
      </div>
    );
  }
}

export default Notification;
