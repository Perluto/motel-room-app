import React, { Component } from "react";

class Slide extends Component {
  state = { data: "", label: "", className: "" };
  render() {
    const images = this.props.images;
    return (
      <React.Fragment>
        <h5 className="text-info">Hinh anh</h5>
        <div id="slide" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#slide" data-slide-to="0" className="active"></li>
            <li data-target="#slide" data-slide-to="1"></li>
            <li data-target="#slide" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner bg-secondary">
            {images.map((e, index) => {
              const c = index === 0 ? "carousel-item active" : "carousel-item";
              return (
                <div className={c}>
                  <img src={e} className="d-block w-50 mx-auto" alt={index} />
                </div>
              );
            })}
          </div>
          <a className="carousel-control-prev" href="#slide" data-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#slide" data-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Slide;
