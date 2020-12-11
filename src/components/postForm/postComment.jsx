import React, { Component } from "react";
import Image1 from "../../image/teamb1.png";
import "../../style/comment.css";
import StarRating from "../common/rating/StarRating";

class PostComment extends Component {
  state = {
    comment: [
      {
        image: Image1,
        date: 5,
        name: "Duc Anh",
        cmt: "Wow! this is really great.",
        star: 3,
      },
      {
        image: Image1,
        date: 5,
        name: "Duc Anh",
        cmt: "Wow! this is really great.",
        star: 3,
      },
      {
        image: Image1,
        date: 5,
        name: "Duc Anh",
        cmt: "Wow! this is really great.",
        star: 3,
      },
    ],
  };

  renderRating(data) {
    let res = [];
    for (let i = 1; i <= 5; i++) {
      res.push(
        i <= data ? (
          <i className="fas fa-star star" style={{ color: "#ffc107" }} />
        ) : (
          <i className="fas fa-star star" style={{ color: "#e4e5e9" }} />
        )
      );
    }
    return res;
  }

  renderCommentList(data) {
    return data.map((comment, index) => {
      return (
        <div key={index} className="w-100 mb-3">
          <div>
            <div className="d-flex ml-1">
              <h5 className="mr-2">
                <strong >{comment.name}</strong>
              </h5>
              <small className="pt-1">{this.renderRating(comment.star)}</small>
            </div>
            <div className="ml-2">
              <small>{comment.cmt}</small>
            </div>
          </div>
          {index === data.length - 1 ? (
            ""
          ) : (
            <div className="mt-3 w-100 border-bottom"></div>
          )}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="d-flex flex-column p-3">
        <div>
          <div className="d-inline mr-3">Danh gia:</div>
          <StarRating></StarRating>
        </div>
        <div className="mb-2">
          <label for="comment" className="form-label">
            Comment:
          </label>
          <textarea
            id="comment"
            placeholder="Write your comment here!"
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <div className="d-flex mb-2 flex-row-reverse">
          <button className="btn btn-outline-primary" type="button">
            Post
          </button>
        </div>
        <div className="w-100 border-bottom mb-3 mt-3"></div>
        <div className="d-flex flex-column">
          {this.renderCommentList(this.state.comment)}
        </div>
      </div>
    );
  }
}

export default PostComment;
