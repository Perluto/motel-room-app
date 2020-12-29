import React, { Component } from "react";
import { Link } from "react-router-dom";

import EditProfile from "../components/editprofile";
import EditPassword from "../components/editpassword";

import auth from "../service/authService";
import userService from "../service/userService";

class Profile extends Component {
  state = {
    profile: [
      {
        label: "Tên:",
        data: "",
      },
      {
        label: "Vai trò:",
        data: "Người thuê trọ",
      },
    ],
    data: false,
    isOwner: false,
    isAdmin: false,
    username: "",
  };

  componentDidMount() {
    const user = auth.getCurrentUser();

    this.setState({
      isOwner: user.isOwner,
      isAdmin: user.isAdmin,
      username: user.username,
    });

    userService.getOwnerById(user._id).then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const user = this.state.profile.map((user, index) => {
      return (
        <div className="row d-flex mb-2" key={index}>
          <div className="col-2">
            <strong>{user.label}</strong>
          </div>
          <div className="col-4">
            {user.label === "Vai trò:" && this.state.isOwner
              ? this.state.isAdmin
                ? "Admin"
                : "Chủ trọ"
              : user.label === "Tên:"
              ? this.state.username
              : user.data}
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <div className="pt-5"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 bg-white text-dark shadow">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <Link
                    data-target="#profile"
                    data-toggle="tab"
                    class="nav-link active"
                  >
                    Profile
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    data-target="#editpassword"
                    data-toggle="tab"
                    class="nav-link"
                  >
                    Edit Password
                  </Link>
                </li>
                {this.state.isOwner && !this.state.isAdmin ? (
                  <li class="nav-item">
                    <Link
                      data-target="#editprofile"
                      data-toggle="tab"
                      class="nav-link"
                    >
                      Edit Profile
                    </Link>
                  </li>
                ) : null}
              </ul>
              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <h5 className="mb-3">User Profile</h5>
                  {user}
                </div>
                <div className="tab-pane" id="editpassword">
                  <EditPassword />
                </div>
                {this.state.isOwner ? (
                  <div className="tab-pane" id="editprofile">
                    {!this.state.data ? (
                      ""
                    ) : (
                      <EditProfile data={this.state.data}></EditProfile>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
