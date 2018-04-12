import React, { Component, PropTypes } from 'react';
 
export default class CommentModal extends Component {

  constructor(props) {
    super(props);
    this.state = {comments:""};
    this.submitComment = this.submitComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitComment() {
      this.props.sendComment(this.state.comments);
      this.setState({comments:""});
  }

  /* update the value of commments */
  handleChange(event) {
      this.setState({comments: event.target.value});
  }

  render() {
    return (
        /* the modal for writing comment, including the tilte, textarea and buttons */
        <div>
         <div className="modal fade" id={this.props.name} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog commentModel">
                <div className="modal-content">
                    <div className="modal-header commentModel-header">
                        <h4 className="modal-title" id="myModalLabel">{this.props.name}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">
                        <textarea className="form-control" type="text" value={this.state.comments} onChange={this.handleChange} placeholder="Add your comment" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.submitComment} data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
  }
}
