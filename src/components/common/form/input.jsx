import React from "react";

const Input = ({ name, label, error, isDisabled, ...rest }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        id={name}
        disabled={isDisabled ? true : false}
        {...rest}
      />
      {error[name] && <div className="invalid">{error[name]}!</div>}
    </React.Fragment>
  );
};

export default Input;
