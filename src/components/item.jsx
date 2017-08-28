import React, { Component, PropTypes } from 'react';
import CommentModal from './commentModal.jsx'
 
export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userComments:[],
    };
    this.getComment = this.getComment.bind(this);
    this.clearComments = this.clearComments.bind(this);
  }

  /* get the comments from child component */

  getComment(val){
    var newDate = new Date();
    var newTime = newDate.toLocaleTimeString();
    var singleComment = {
      content:val,
      date:newTime,
    }
    this.setState({userComments:this.state.userComments.concat([singleComment])});
  }

  clearComments(){
    this.setState({userComments:[]});
  }

  render() {

    /* map the comments */
    const allComments = this.state.userComments.map((com)=>{
        return(
            <li>{com.content} -- {com.date}</li>
        )
    });

    const buttonName = "#"+this.props.language.name;

    return (
      <div className="panel panel-primary">

        {/* the header of single item, including title and tow buttons */}
        <div className="panel-heading">
          <h2 className="panel-title">{this.props.language.name}</h2>
          <div className="panel-button btn-group btn-group-lg">
            <button className="btn btn-primary btn-lg" type="button" data-toggle="modal" data-target={buttonName} >Add Comment</button>
            <button className="btn btn-primary btn-lg" type="button" onClick={this.clearComments} >Clear Comment</button>
          </div>
        </div><br />

        {/* the content of single item, including the introduction and comments */}
        <div className="panel-body">

            <div className="panel-text">
              {this.props.language.text}
            </div>

            <div className="panel-text">
              <h4>Comments:</h4> 
              <ul>{allComments}</ul>
            </div>
          
            <div>
              <CommentModal name={this.props.language.name} sendComment={this.getComment} />
            </div>       
        </div>
        
      </div>
    );
  }
}
