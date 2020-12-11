import React, { Component } from "react";

class Slide extends Component {
  state = { data: "", label: "", className: "" };
  render() {
    return (
      <div className="w-75">
        <h5 class="text-info">Hinh anh</h5>
        <div id="slide" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#slide" data-slide-to="0" class="active"></li>
            <li data-target="#slide" data-slide-to="1"></li>
            <li data-target="#slide" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner bg-dark">
            <div class="carousel-item active">
              <img
                src={this.props.images[0]}
                className="d-block w-50 mx-auto"
                alt="Image1"
              />
            </div>
            <div class="carousel-item">
              <img
                src={this.props.images[1]}
                className="d-block w-50 mx-auto"
                alt="Image2"
              />
            </div>
            <div class="carousel-item">
              <img
                src={this.props.images[2]}
                className="d-block w-50 mx-auto"
                alt="Image3"
              />
            </div>
          </div>

          <a class="carousel-control-prev" href="#slide" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#slide" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Slide;
