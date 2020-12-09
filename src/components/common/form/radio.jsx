import React from "react";

const Radio = ({ name, label, error, ...rest }) => {
  let data = [
    { name: "Có", value: true },
    { name: "Không", value: false },
  ];

  return (
    <React.Fragment>
      <label className="mr-3">{label} :</label>
      {data.map((option, index) => {
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
      {error && <div className="invalid">{error}!</div>}
    </React.Fragment>
  );
};

export default Radio;
