import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    options: {
      renter: [],
      owner: [{ label: "", link: "", className: "" }],
      admin: [],
    },
    isNavCollapsed: true,
    data: null,
  };

  componentDidMount() {
    this.setState({ data: this.state.options.renter });
  }

  handleNavCollapse = () => {
    let isNavCollapsed = !this.state.isNavCollapsed;
    console.log(isNavCollapsed);
    this.setState({ isNavCollapsed });
  };

  render() {
    const { isNavCollapsed } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <NavLink className="navbar-brand" to="/">
          Phong Tro
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavBar"
          aria-controls="myNavBar"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={this.handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""}  navbar-collapse`}
          id="myNavBar"
        >
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">
              Rentals
            </NavLink>
            <NavLink className="nav-item nav-link" to="/profile">
              <i className="fas fa-user-circle fa-lg"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
