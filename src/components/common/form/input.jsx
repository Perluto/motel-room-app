import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input className="form-control" id={name} {...rest} />
      {error[name] && <div className="invalid">{error[name]}!</div>}
    </React.Fragment>
  );
};

export default Input;
