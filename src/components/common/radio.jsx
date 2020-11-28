import React from "react";

const Radio = ({ name, label, options, error, ...rest }) => {
  let data = [
    { name: "Yes", value: true },
    { d: false, value: false },
  ];

  if (options === null) {
    options = data;
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      {options.map((option, index) => {
        return (
          <div key={index} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value={option.value}
              name={name}
              id={index}
              {...rest}
            />
            <label className="form-check-label">{option.name}</label>
          </div>
        );
      })}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Radio;
