import React, { Component } from "react";
import "../../../style/comment.css";

class StarRating extends Component {
  state = {
    numbers: [1, 2, 3, 4, 5],
    rating: 0,
    hoverRating: 0,
  };

  handleRating = (rating) => {
    this.setState({
      rating: rating,
    });
  };

  handleHover = (rating) => {
    this.setState({
      hoverRating: rating,
    });
  };

  setColor = (color) => {
    return {
      color: color,
    };
  };

  render() {
    var rating = this.state.numbers.map((number) => {
      return (
        <label className="rating">
          <input
            key={number}
            type="radio"
            name="rating"
            value={number}
            onClick={() => this.handleRating(number)}
          />
          <i
            className="fas fa-star star"
            style={{
              color: `${
                number <= (this.state.hoverRating || this.state.rating)
                  ? "#ffc107"
                  : "#e4e5e9"
              }`,
            }}
            onMouseEnter={() => this.handleHover(number)}
            onMouseLeave={() => this.handleHover(null)}
          />
        </label>
      );
    });
    return <>{rating}</>;
  }
}

export default StarRating;
