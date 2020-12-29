import React, { Component } from "react";
import "../../style/comment.css";
import StarRating from "../common/rating/StarRating";
import auth from "../../service/authService";
import postService from "../../service/postService";
import { formatDate } from "../../utils/dateCalculate";
class PostComment extends Component {
  state = {
    comment: [],
    update: false,
    user: {},
    content: "",
  };

  handleChange = ({ currentTarget: input }) => {
    this.setState({ content: input.value });
  };

  handleComment = async () => {
    const data = {
      idUserRef: auth.getCurrentUser()._id,
      content: this.state.content,
      dateTime: formatDate(Date.now()),
    };

    await postService.comment(this.props.idPost, { data: data });

    window.location.reload();
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({
      user,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.update && prevProps.data !== undefined) {
      this.setState({ comment: prevProps.data, update: true });
    }
  }

  setConfirm = async (cmt) => {
    try {
      await postService.confirmComment(cmt.idPostRef, cmt._id);
      alert("done");
    } catch (error) {
      alert("error");
    }
    window.location.reload();
  };

  renderCommentList(data) {
    return data.map((comment, index) => {
      return !comment.isConfirm && this.state.user.isAdmin ? (
        <div key={index} className="w-100 mb-3">
          <dir className="d-flex justify-content-between">
            <div>
              <div className="d-flex">
                <h5 className="mr-2">
                  <strong>{comment.idUserRef.username}</strong>
                </h5>
              </div>
              <div className="ml-2">
                <small>{comment.content}</small>
              </div>
            </div>
            <div>
              <i
                class="fas fa-lg fa-check-circle text-primary rounded mr-5 p-3 btn-light"
                style={{ cursor: "pointer" }}
                onClick={() => this.setConfirm(comment)}
              />
            </div>
          </dir>
          {index === data.length - 1 ? (
            ""
          ) : (
            <div className="mt-3 w-100 border-bottom"></div>
          )}
        </div>
      ) : null;
    });
  }

  renderCommentListConform(data) {
    return data.map((comment, index) => {
      return comment.isConfirm ? (
        <div key={index} className="w-100 mb-3">
          <div>
            <div className="d-flex ml-1">
              <h5 className="mr-2">
                <strong>{comment.idUserRef.username}</strong>
              </h5>
            </div>
            <div className="ml-2">
              <small>{comment.content}</small>
            </div>
          </div>
          {index === data.length - 1 ? (
            ""
          ) : (
            <div className="mt-3 w-100 border-bottom"></div>
          )}
        </div>
      ) : null;
    });
  }

  render() {
    const content = this.state.content;

    return (
      <div className="d-flex flex-column p-3">
        <div>
          <div className="d-inline mr-3">Đánh giá:</div>
          <StarRating></StarRating>
        </div>
        <div className="mb-2">
          <label for="comment" className="form-label">
            Bình luận:
          </label>
          <textarea
            id="comment"
            placeholder="Write your comment here!"
            className="form-control"
            rows="3"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="d-flex mb-2 flex-row-reverse">
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={this.handleComment}
            disabled={content !== "" ? false : true}
          >
            Đăng
          </button>
        </div>
        <div className="w-100 border-bottom mb-3 mt-3"></div>
        <div className="d-flex flex-column">
          {this.renderCommentList(this.state.comment)}
          {this.renderCommentListConform(this.state.comment)}
        </div>
      </div>
    );
  }
}

export default PostComment;
