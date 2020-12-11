import React, { Component } from "react";
import "../../../style/comment.css"

class StarRating extends Component{
    state = {
        numbers: [1,2,3,4,5],
        rating: 0,
        hoverRating: 0
    };
    setRating = (rating) => {
        this.setState({
            rating: rating
        })
    }
    setHover = (rating) => {
        this.setState({
            hoverRating: rating
        })
    }
    setColor = (color) => {
        return {
            color: color
        }
    }

    render(){
        var rating = this.state.numbers.map((number) => {
            return(
                <label className="Rating">
                    <input 
                        key={number}
                        type="radio" 
                        name="rating"
                        value={number}
                        onClick={() => this.setRating(number)}
                    />
                    <i 
                        className="fas fa-star Star"
                        style={ this.setColor(number <= (this.state.hoverRating || this.state.rating) ? "#ffc107" : "#e4e5e9") }
                        onMouseEnter={() => this.setHover(number)}
                        onMouseLeave={() => this.setHover(null)}
                    />
                </label>
            )
        })
        return(
            <>
            {
                rating
            }
            </>
        )
    }
}

export default StarRating;