import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Radio from "./radio";
import Select from "react-select";
import lodash from "lodash";
import { changeImgToBase64 } from "../../../utils/changeImageToBase64";

class Form extends Component {
  validate() {
    const data = lodash.pick(this.state.data, Object.keys(this.schema));
    const { error } = Joi.validate(data, this.schema, {
      abortEarly: false,
    });
    return error ? error.details[0].message : null;
  }

  validateProperty = ({ id: name, value }) => {
    const isRequired = this.schema[name]._flags.presence;
    if (isRequired !== "required") return null;

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

  handleImage = (e) => {
    const data = [...e.target.files];
    let promiseAll = [];
    data.forEach((ele) => {
      promiseAll.push(changeImgToBase64(ele));
    });

    Promise.all(promiseAll).then((res) => {
      const errors = { ...this.state.errors };
      const errorMessage = this.validateProperty({ id: "image", value: res });
      if (errorMessage) errors["image"] = errorMessage;
      else delete errors["image"];
      const data = { ...this.state.data };
      data["image"] = res;
      this.setState({ data, errors });
    });
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
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty({
      id: input.name,
      value: input.value,
    });
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderBtn = (label) => {
    return (
      <button
        disabled={this.validate()}
        className="btn btn-primary ml-2 mt-2"
        onClick={this.handleSubmit}
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type, disabled = false) => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        error={errors}
        value={data[name] ? data[name] : null}
        type={type}
        onChange={this.handleChange}
        isDisabled={disabled}
      />
    );
  };

  renderInputImage = (name) => {
    const { errors } = this.state;
    return (
      <div className="form-group">
        <input
          type="file"
          className="form-control-file"
          id="file"
          onChange={this.handleImage}
          multiple
        />
        {errors[name] && <div className="invalid">{errors[name]}!</div>}
      </div>
    );
  };

  renderSelect = (name, label, options, disabled = false) => {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <div className="mb-2">{label}</div>
        <Select
          isDisabled={disabled}
          options={options}
          name={name}
          defaultValue={data[name]}
          onChange={this.handleChangeSelect}
          placeholder={"Chọn " + label + " ..."}
        ></Select>
        {errors[name] && <div className="invalid">{errors[name]}!</div>}
      </React.Fragment>
    );
  };

  renderRadio = (name, label, disabled = false) => {
    const { data, errors } = this.state;
    return (
      <Radio
        value={data[name] ? data[name] : null}
        name={name}
        label={label}
        error={errors[name]}
        onClick={this.handleClick}
        isDisabled={disabled}
      ></Radio>
    );
  };
}

export default Form;
