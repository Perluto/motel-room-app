import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  return (
    <React.Fragment>
      <div
        className="btn"
        id="myDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-user-circle fa-lg"></i>
      </div>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="myDropdown"
      >
        <NavLink className="dropdown-item" to="/profile">
          Profile
        </NavLink>
        <NavLink className="dropdown-item" to="/change-password">
          Chang password
        </NavLink>
        <NavLink className="dropdown-item" to="/logout">
          Logout
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
