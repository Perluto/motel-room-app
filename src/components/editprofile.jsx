import React, { Component } from "react";
import auth from '../service/authService';
import account from '../service/userService';

class EditProfile extends Component{
    state = {
        user: [],
        password: '',
    }

    componentDidMount() {
        const role = auth.getCurrentUser();
        this.setState({
            user: role
        })
    }
    ChangePass = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(this.state.pass)
    }
    handleSubmit = (event) => {
        const {user,password} = this.state;
        console.log({password},user);
        if(password.length<5) alert("Mật khẩu tối thiểu phải có 6 ký tự"); 
        else{
            account.changePassword(user._id,{password}).then((res) => {
                console.log(res);
            })
            alert("Mật khẩu đã thay đổi");
        }
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
            
            <form onSubmit={this.handleSubmit}>
                 {
                     inputOwner
                 }
                <h5 className="mb-3 text-primary">Tài khoản:</h5>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label">Password</label>
                    <input class="form-control col-lg-6" type="password" placeholder="111111" onChange={this.ChangePass}/>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label"></label>
                    <div class="col-lg-6">
                        <input type="submit" className="btn btn-primary" value="Submit"></input>
                    </div>
                </div>
            </form>
        )
    }
}

export default EditProfile;