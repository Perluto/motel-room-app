import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input className="form-control" id={name} {...rest} />
      {error[name] && (
        <div className="alert alert-danger mt-1">{error[name]}</div>
      )}
    </React.Fragment>
  );
};

export default Input;
