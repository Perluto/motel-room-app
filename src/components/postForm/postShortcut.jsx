import React, { Component } from "react";
import { Link } from "react-router-dom";
class postShortcut extends Component {
  state = { data: "" };

  componentDidMount = () => {
    const data = this.props.data;
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="col-sm-6 mb-4 p-3 border shadow-sm bg-white">
        <div className="d-flex flex-row p-2">
          <div className="w-50">
            <Link to="/post">
              <img src={data.image1} className="d-block w-100" alt="" />
            </Link>
          </div>
          <div className="w-50 container d-flex flex-column">
            <Link className="text-danger text-decoration-none" to="/post">
              {data.title}
            </Link>
            <strong>{data.price} triệu/tháng</strong>
            <p>{data.acreage} m²</p>
            <p>{data.p_content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default postShortcut;
