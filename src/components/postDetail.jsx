import React,{Component} from "react";
import "../style/postDetail.css"
import Image1 from "../image/teamb1.png";
import Image2 from "../image/teamb2.jpg";
import Image3 from "../image/teamb3.jpg";

class postDetail extends Component{
    state ={
        name: 'Nguyen Duc Anh',
        address: '158/65 Đường số 9, Phường 9, Quận Gò Vấp, Hồ Chí Minh',
        phone: 913696081,
        price: 2,
        acreage: 18,
        expiration:"06/12/20",
        update: "01/12/20",
        image3: Image3,
        image1: Image1,
        image2: Image2
    };

    render(){
        return(
            <div className="container">
            <table className="table table-bordered table-detail">
                <tbody>
                    <tr>
                        <td className="name">Địa chỉ:</td>
                        <td className="content">{this.state.address}</td>
                    </tr>
                    <tr>
                        <td className="name">Người đăng:</td>
                        <td className="content">{this.state.name}</td>
                    </tr>
                    <tr>
                        <td className="name">Điện thoại:</td>
                        <td className="content">{this.state.phone}</td>
                    </tr>
                    <tr>
                        <td className="name">Diện tích:</td>
                        <td className="content">{this.state.acreage}</td>
                    </tr>
                    <tr>
                        <td className="name">Giá:</td>
                        <td className="content">{this.state.price}</td>
                    </tr>
                    <tr>
                        <td className="name">Ngày cập nhật:</td>
                        <td className="content">{this.state.update}</td>
                    </tr>
                    <tr>
                        <td className="name">Ngày hết hạn:</td>
                        <td className="content">{this.state.expiration}</td>
                    </tr>
                </tbody>
            </table>
            <div className="des">
                <strong>Thông tin mô tả</strong>
                <p>-Phòng tắm:</p>
                <p>-Phòng bếp:</p>
                <p>-Điều hòa:</p>
                <p>-Ban công:</p>
                <p>-Điện nước:</p>
                <p>-Tiện ích:</p>
            </div>
            <div className="slide">
            <div id="demo" class="carousel slide" data-ride="carousel">

                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className="ima" src={this.state.image1} alt="Los Angeles"/>
                    </div>
                    <div class="carousel-item">
                        <img className="ima" src={this.state.image2} alt="Chicago"/>
                    </div>
                    <div class="carousel-item">
                        <img className="ima" src={this.state.image3} alt="New York"/>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>

                </div>
            </div>
        </div>
            
        )
    }
}

export default postDetail;