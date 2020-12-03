import React from "react";
import Form from "../common/form";

class MotelResForm extends Form {
  state = { data: {}, errors: {} };
  render() {
    return (
      <div className="border border-info rounded p-4 mt-4">
        <h5 className="card-title text-info">Thong tin phong tro</h5>
        <div className="form-row ml-1">
          <div className="form-group col-md-3">
            <label htmlFor="city">
              Thanh pho/Tinh <span className="text-danger">(*)</span>
            </label>
            <input type="text" className="form-control" id="city"></input>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="district">
              Quan/Huyen <span className="text-danger">(*)</span>
            </label>
            <input type="text" className="form-control" id="district"></input>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="street">
              Duong/Thon <span className="text-danger">(*)</span>
            </label>
            <input type="text" className="form-control" id="street"></input>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="ward">
              Phuong/Xa <span className="text-danger">(*)</span>
            </label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="ward">
              So Nha <span className="text-danger">(*)</span>
            </label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-7">
            <label htmlFor="ward">Gần những đia điểm công cộng</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-3"></div>
          <div className="form-group col-md-3">
            <label htmlFor="ward">Loai phong</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-1">
            <label htmlFor="ward">So phong</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="ward">Dien tich</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="ward">Gia ca</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
        </div>
        <h6 className="card-title text-info">Điều kiện cơ sở vật chất</h6>
        <div className="form-row ml-1">
          <div className="form-group col-md-6">
            <label htmlFor="ward">Phòng tắm</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="ward">Phòng bếp</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="ward">Diều hòa</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="ward">Ban công</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="ward"> Giá điện (kW/h)</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="ward"> Giá nước (m3)</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="ward">Other</label>
            <input type="text" className="form-control" id="ward"></input>
          </div>
        </div>
        <h6 className="card-title text-info">Hình ảnh</h6>
        <div className="form-row ml-1">
          <div class="form-group">
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              multiple
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MotelResForm;
