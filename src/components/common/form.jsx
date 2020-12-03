import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Radio from "./radio";
import Select from "react-select";

class Form extends Component {
  validate() {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    return error ? error.details[0].message : null;
  }

  validateProperty = ({ id: name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else delete errors[input.id];

    const data = { ...this.state.data };
    data[input.id] = input.value;

    this.setState({ data, errors });
  };

  handleChangeSelect = (option, action) => {
    console.log(option);
    const value = option.value;
    const name = action.name;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty({ id: name, value: value });
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    const data = { ...this.state.data };
    data[name] = value;

    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    if (errors) {
      this.setState({ errors: errors || {} });
      return;
    }

    this.doSubmit();
  };

  handleClick = ({ currentTarget: input }) => {
    console.log(input);
  };

  renderBtn = (label) => {
    return (
      <button
        disabled={this.validate()}
        className="btn btn-primary m-2"
        onClick={this.handleSubmit}
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type) => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        error={errors}
        value={data[name] ? data[name] : null}
        type={type}
        onChange={this.handleChange}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <div>
        <div>{label}</div>
        <Select
          options={options}
          name={name}
          defaultValue={data[name]}
          onChange={this.handleChangeSelect}
          placeholder={"Select " + label + " ..."}
        ></Select>
        {errors[name] && (
          <div className="alert alert-danger mt-1">{errors[name]}</div>
        )}
      </div>
    );
  };

  renderRadio = (name, label, options) => {
    const { errors } = this.state;
    return (
      <Radio
        name={name}
        label={label}
        options={options}
        error={errors[name]}
        onClick={this.handleClick}
      ></Radio>
    );
  };
}

export default Form;
