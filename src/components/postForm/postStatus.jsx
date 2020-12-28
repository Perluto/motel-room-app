import React from "react";
import { formatDate } from "../../utils/dateCalculate";

const PostStatus = ({ data }) => {
  return (
    <React.Fragment>
      <h4 className="text-info">Status</h4>
      <div className=" d-flex flex-column">
        <div className="d-flex justify-content-between mb-1">
          <div>Xác nhận: {data.isConfirm ? "Ok" : "Chưa"} </div>
          <div>
            View: {data.view} <i className="fas fa-eye text-secondary"></i>
          </div>
          <div>
            Like: {data.like} <i className="fas fa-thumbs-up text-primary"></i>
          </div>
          <div>
            Follow: {data.follow} <i className="fas fa-heart text-danger"></i>
          </div>
        </div>
        <div className="mb-1">Ngày đăng: {formatDate(data.postedDate)}.</div>
        <div className="mb-1">Ngày hết hạn: {formatDate(data.dueDate)}.</div>
        <div className=" d-flex justify-content-between">
          <button className="btn btn-outline-primary">Gia han</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostStatus;
