import React, { Component } from "react";
import Select from "react-select";

class Search extends Component {
  state = {
    data: { roomType: "" },
    roomType: [
      { label: "Phòng Trọ", value: "Phòng Trọ" },
      { label: "Chung Cư Mini", value: "Chung Cư Mini" },
      { label: "Nhà Nguyên Căn", value: "Nhà Nguyên Căn" },
      { label: "Chung Cư Nguyên Căn", value: "Chung Cư Nguyên Căn" },
    ],
  };

  handleChange = (option, action) => {
    const value = option.value;
    const name = action.name;
    const data = { ...this.state.data };
    data[name] = value;

    this.setState({ data });
  };

  render() {
    return (
      <div className="h-50 border border-light rounded p-3 bg-white shadow">
        <h4>
          <strong className="text-primary">Bộ lọc</strong>
        </h4>
        <div className="d-flex flex-column"></div>
      </div>
    );
  }
}

export default Search;
