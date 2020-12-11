import React, {Component} from "react";
import Image1 from "../../image/teamb1.png";
import "../../style/comment.css";
import StarRating from "../common/Rating/StarRating";

class PostComment extends Component{
    state = {
        comment : [
            {
                image: Image1,
                date: 5,
                name: 'Duc Anh',
                cmt: 'Wow! this is really great.',
                star: 3
            },
            {
                image: Image1,
                date: 5,
                name: 'Duc Anh',
                cmt: 'Wow! this is really great.',
                star: 3
            },{
                image: Image1,
                date: 5,
                name: 'Duc Anh',
                cmt: 'Wow! this is really great.',
                star: 3
            }
        ]
    };
    setStyle() {
        return {
            color: "#ffc107"
        }
    }

    render() {
        var commentList = this.state.comment.map((comment) => {
            return (
                <div className="media">
                            <div className="media-body">
                                
                              <h4 className="media-heading user_name">{comment.name}</h4>
                              {comment.cmt}
                              
                              <p><small>Like - Share</small></p>
                            </div>
                            <p className="pull-right">
                                <small>{comment.date} days ago</small>
                                <br/>
                                {comment.star}/5 <i className="fas fa-star" style={this.setStyle()}></i>
                            </p>
                            
                          </div>
            )
        })


        return(
            <div className="row">
               <div className="col-md-9 col-md-offset-3 p-3 my-3 border">
                    <div className="panel panel-info ">
                        <div className="panel-body">
                            <textarea placeholder="Write your comment here!" className="border border-secondary rounded pb-cmnt-textarea"></textarea>
                            <form className="form-inline">
                                <div className="float-left form-inline">
                                    <StarRating></StarRating>
                                </div>

                                <div className="float-right fr">
                                    <button className="btn btn-primary" type="button">Post</button>
                                </div>
                            </form>
                        </div>
                
                    </div>
                    <div class="comments-list">
                        <h4>{this.state.comment.length} Comments</h4>
                        {
                            commentList
                        }
                   </div>
                </div>
           </div>
        );
    };
}

export default PostComment;