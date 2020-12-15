import React from "react";
// import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Report() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div
        className="btn-light rounded text-warning"
        style={{ cursor: "pointer" }}
        onClick={handleClickOpen}
      >
        <i className="fas fa-exclamation-circle fa-lg p-3"></i>
      </div>
      <Dialog
        open={open}
        className="w-50 m-auto"
        fullWidth="true"
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Report"}</DialogTitle>
        <DialogContent>
          <div className="d-flex flex-column p-3">
            <textarea
              id="report"
              placeholder="Write your report here!"
              className="form-control"
              rows="4"
            ></textarea>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={handleClose}
          >
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
