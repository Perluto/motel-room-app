import React, {Component} from "react";
import "../style/postShotcut.css";
import { Link } from "react-router-dom";
import Image1 from "../image/teamb1.png";
import Image2 from "../image/teamb2.jpg";
import Image3 from "../image/teamb3.jpg";


class postShotcut extends Component{
    state = {
        content: [{
            title: 'Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ' ,
            price: 3,
            acreage:14, 
            address:'Quận 3, Hồ Chí Minh',
            p_content:'Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…',
            image1: Image1,
            image2: Image2,
            image3: Image3
        },
        {
            title: 'Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ' ,
            price: 3,
            acreage:14, 
            address:'Quận 3, Hồ Chí Minh',
            p_content:'Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…',
            image1: Image1,
            image2: Image2,
            image3: Image3
        },
        {
            title: 'Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ' ,
            price: 3,
            acreage:14, 
            address:'Quận 3, Hồ Chí Minh',
            p_content:'Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…',
            image1: Image1,
            image2: Image2,
            image3: Image3
        },
        {
            title: 'Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ' ,
            price: 3,
            acreage:14, 
            address:'Quận 3, Hồ Chí Minh',
            p_content:'Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…',
            image1: Image1,
            image2: Image2,
            image3: Image3
        }]
    };

    render() {
        const elementPost = this.state.content.map((content) => {
            return  <div className="col-sm-6">
                        <div className="post">
                            <div className="post1">
                                <Link className="my-link" to="/postDetail">
                                    <img src={content.image1} alt=""/>
                                </Link>
                            </div>
                            <div className="container post2">
                                <Link className="my-link" to="/postDetail">{content.title}</Link>
                                <strong>{content.price} triệu/tháng</strong>
                                <p>{content.acreage} m²</p>
                                <p>{content.p_content}</p>
                            </div>
                        </div>
                    </div>
        })
        return(
            <div className="container">
            <div className="jumbotron">
                <div className="row">
                    {
                        elementPost
                    }
                </div>
            </div>
        </div>
        );

    }
}

export default postShotcut;