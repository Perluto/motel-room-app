import React, { Component } from "react";
import auth from '../service/authService';

class EditProfile extends Component{
    state = {user: []}
    componentDidMount() {
        const role = auth.getCurrentUser();
        this.setState({
            user: role
        })
    }
    render() {
        const inputOwner = (
            (this.state.user.isOwner&&!this.state.user.isAdmin) ? (
                <>
                    <h5 className="mb-3 text-primary">Thông tin chủ phòng trọ:</h5>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">Name:</label>
                        <input className="col-lg-6 form-control" type="text" value="Đức Anh"/>
                    </div> 
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">Phone:</label>
                        <input className="col-lg-6 form-control" type="text" value="12345678"/>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">Card Id:</label>
                        <input className="col-lg-6 form-control" type="text" value="123456789"/>
                    </div>
                </>
            ) : null
        )
        return (
            <form>
                {
                    inputOwner
                }
                <h5 className="mb-3 text-primary">Tài khoản:</h5>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">User Name:</label>
                    <input className="col-lg-6 form-control" type="text" value={this.state.user.username}/>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label">Password</label>
                        <input class="form-control col-lg-6" type="password" value="11111122333"/>
                    </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                        <input class="form-control col-lg-6" type="password" value="11111122333"/>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label"></label>
                    <div class="col-lg-6">
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default EditProfile;