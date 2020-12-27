import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import EditProfile from "../components/editprofile";
import auth from "../service/authService";

class Profile extends Component{
    state = {
        profile:[
            {
                label: 'Tên:',
                data: 'Đức Anh'
            },
            {
                label: 'Vai trò:',
                data: 'Người thuê trọ'
            }
        ],
        isOwner: true
    }
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({
            isOwner: user.isOwner
        })
    }
    render() {
        const user = this.state.profile.map((user,index) => {
            return(
                <div className="row d-flex mb-2" key={index}>
                    <div className="col-2"><strong>{user.label}</strong></div>
                    <div className="col-4">{(user.label==='Vai trò:'&&this.state.isOwner)?'Chủ trọ':user.data}</div>
                </div>
            )
        });
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="col-lg-8 bg-white text-dark">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <Link data-target="#profile" data-toggle="tab" class="nav-link active">Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link data-target="#edit" data-toggle="tab" class="nav-link">Edit</Link>
                            </li>
                        </ul>
                        <div className="tab-content py-4">
                            <div className="tab-pane active" id="profile">
                                <h5 className="mb-3">User Profile</h5>
                                {
                                    user
                                }
                            </div>
                            <div className="tab-pane" id="edit">
                                <EditProfile></EditProfile>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;