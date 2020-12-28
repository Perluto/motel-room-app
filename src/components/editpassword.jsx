import React, { Component } from "react";
import auth from '../service/authService';
import account from '../service/userService';

class EditPassword extends Component{
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
        return (          
            <form onSubmit={this.handleSubmit}>
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

export default EditPassword;