import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../image/teamb1.png";
import Image2 from "../../image/teamb2.jpg";
import Image3 from "../../image/teamb3.jpg";
class postShortcut extends Component {
  state = {
    content: [
      {
        title: "Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ",
        price: 3,
        acreage: 14,
        address: "Quận 3, Hồ Chí Minh",
        p_content:
          "Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…",
        image1: Image1,
        image2: Image2,
        image3: Image3,
      },
      {
        title: "Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ",
        price: 3,
        acreage: 14,
        address: "Quận 3, Hồ Chí Minh",
        p_content:
          "Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…",
        image1: Image1,
        image2: Image2,
        image3: Image3,
      },
      {
        title: "Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ",
        price: 3,
        acreage: 14,
        address: "Quận 3, Hồ Chí Minh",
        p_content:
          "Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…",
        image1: Image1,
        image2: Image2,
        image3: Image3,
      },
      {
        title: "Phòng trọ Q3, CMT8; 14 m2, 3,0 triệu/tháng ",
        price: 3,
        acreage: 14,
        address: "Quận 3, Hồ Chí Minh",
        p_content:
          "Chính chủ cho thuê 06 phòng mới, khép kín, sạch, đẹp, tường và sàn ốp gạch tại 540/2/11 CMT8, P11, Q3.- 03 phòng 14 m2;…",
        image1: Image1,
        image2: Image2,
        image3: Image3,
      },
    ],
  };

  render() {
    const elementPost = this.state.content.map((content) => {
      return (
        <div className="col-sm-6 mb-4">
          <div className="d-flex flex-row border border-danger p-2">
            <div className="w-50">
              <Link to="/post">
                <img src={content.image1} className="d-block w-100" alt="" />
              </Link>
            </div>
            <div className="w-50 container d-flex flex-column">
              <Link
                className="text-danger text-decoration-none"
                to="/post"
              >
                {content.title}
              </Link>
              <strong>{content.price} triệu/tháng</strong>
              <p>{content.acreage} m²</p>
              <p>{content.p_content}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="jumbotron bg-light">
        <div className="row">{elementPost}</div>
      </div>
    );
  }
}

export default postShortcut;
