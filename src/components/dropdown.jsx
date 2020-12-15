import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ icon, data }) => {
  return (
    <React.Fragment>
      <div
        className="btn"
        id="myDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className={icon}></i>
      </div>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="myDropdown"
      >
        {data.map((e, index) => {
          return (
            <div className={"dropdown-item" + e.className}>
              <Link to={e.path}>{e.label}</Link>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
