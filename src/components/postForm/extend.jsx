import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Form from "../common/form/form";
import Joi from "joi-browser";

import postService from "../../service/postService";

import { formatDate, dateCalculate } from "../../utils/dateCalculate";

class Extend extends Form {
  state = {
    data: {},
    errors: {},
    open: false,
    period: [
      { label: "Tuần", value: "week" },
      { label: "Tháng", value: "month" },
      { label: "Năm", value: "year" },
    ],
  };

  schema = {
    duration: Joi.number().min(1).required().label("Thời hạn"),
    period: Joi.string().required().label("Chu kỳ"),
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  doSubmit = () => {
    const data = this.state.data;
    let dueDate = new Date(this.props.dueDate).getTime();
    dueDate = dueDate > Date.now() ? dueDate : Date.now();
    dueDate = formatDate(dateCalculate(dueDate, data.duration, data.period));

    postService
      .extend(this.props.id, dueDate)
      .then((res) => {
        alert("Done");
        this.setState({ open: false });
        window.location.reload();
      })
      .catch(() => {
        alert("Error");
        this.setState({ open: false });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="btn btn-outline-primary rounded"
          style={{ cursor: "pointer" }}
          onClick={this.handleClickOpen}
        >
          Gia hạn
        </div>
        <Dialog
          open={this.state.open}
          className="w-50 m-auto"
          fullWidth="true"
          maxWidth="md"
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"> Gia hạn</DialogTitle>
          <DialogContent>
            <div className="form-row">
              <div className="form-group col-md-6">
                {this.renderInput("duration", "Thời hạn", "number")}
              </div>
              <div className="form-group col-md-6">
                {this.renderSelect("period", "Chu kỳ", this.state.period)}
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            {this.renderBtn("Gia hạn")}
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={this.handleClose}
            >
              Bỏ qua
            </button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default Extend;
