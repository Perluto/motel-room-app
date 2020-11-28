import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import Radio from "./radio";

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
    console.log(input);

    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else delete errors[input.id];

    const data = { ...this.state.data };
    data[input.id] = input.value;

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
        className="btn btn-primary"
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
        value={data[name]}
        type={type}
        onChange={this.handleChange}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        options={options}
        error={errors[name]}
        value={data[name]}
        onChange={this.handleChange}
      ></Select>
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
