import React from "react";

const InfoOwner = () => {
  return (
    <div className="border border-info rounded p-4 mt-4">
      <h5 className="card-title text-info">Info Owner</h5>
      <div className="form-row ml-1">
        <div className="col">
          <label htmlFor="name">Ho ten</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value="Nguyen Huy Hoang"
            disabled
          />
        </div>
        <div className="col">
          <label htmlFor="phone">So dien thoai</label>
          <input
            id="phone"
            type="text"
            className="form-control"
            value="12345678"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default InfoOwner;
