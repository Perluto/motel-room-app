import React from "react";

const PostStatus = () => {
  return (
    <div className="border border-danger rounded p-4 w-50 ml-5">
      <h4 className="text-info">Status</h4>
      <div className=" d-flex flex-column">
        <div className="d-flex justify-content-between mb-1">
          <div>Confirm: True</div>
          <div>
            View: 1000 <i className="fas fa-eye text-secondary"></i>
          </div>
          <div>
            Like: 1000 <i className="fas fa-thumbs-up text-primary"></i>
          </div>
          <div>
            Follow: 1000 <i className="fas fa-heart text-danger"></i>
          </div>
        </div>
        <div className="mb-1">Date Posted</div>
        <div className="mb-1">Date Due</div>
        <div className=" d-flex justify-content-between">
          <button className="btn btn-primary">Change</button>
          <button className="btn btn-primary">Gia han</button>
        </div>
      </div>
    </div>
  );
};

export default PostStatus;
