import React from "react";
import { Link } from "react-router-dom";

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
        <div className="dropdown-item">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="dropdown-item">
          <Link to="/change-password">Chang password</Link>
        </div>
        <div className="dropdown-item">
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
