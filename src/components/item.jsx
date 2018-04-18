import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import CommentModal from './commentModal.jsx'
 
export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userComments: [],
      viewComments: true,
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

    console.log("viewComments: ", this.state.viewComments);

    /* map the comments */
    const allComments = this.state.userComments.map((com)=>{
        return(
          <div className="row" >
            <li className="panel">             
              <h4>{com.content} -- {com.date}</h4> 
            </li>
          </div>
        )
    });

    const buttonName = "#"+this.props.language.name;

    return (

      <Panel>

        {/* the header of single item, including title and tow buttons */}
        <Panel.Heading bsClass="panel-heading">
          
          <h2 className="panel-title">{this.props.language.name}</h2>
          <div className="panel-button btn-group btn-group-lg">
            <button className="btn btn-info btn-lg" type="button" data-toggle="modal" data-target={buttonName} >Add Comment</button>
            <button className="btn btn-info btn-lg" type="button" onClick={this.clearComments} >Clear Comment</button>
          </div>
          
        </Panel.Heading><br />

        {/* the content of single item, including the introduction and comments */}
        <Panel.Body className="panel-body">

            <div className="panel-text">
              <h4>{this.props.language.text}</h4>
            </div>

            <div className="panel-text">
              <ul>{allComments}</ul>
            </div>
          
            <div>
              <CommentModal name={this.props.language.name} sendComment={this.getComment} />
            </div>       
        </Panel.Body>
        
      </Panel>
    );
  }
}
