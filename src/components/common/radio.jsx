import React from "react";

const Radio = ({ name, label, options, error, ...rest }) => {
  let data = [
    { d: true, name: "Yes" },
    { d: false, name: "No" },
  ];

  if (options === null) {
    options = data;
  }

  return (
    <div class="form-group">
      <label>{label}</label>
      {options.map((option, index) => {
        return (
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              value="1"
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
