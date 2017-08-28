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
        <div className="modal fade" id={this.props.name} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title" id="myModalLabel">{this.props.name}</h4>
                    </div>
                    <div className="modal-body">
                        <textarea type="text" value={this.state.comments} onChange={this.handleChange} className="form-control" placeholder="Add your comment" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.submitComment} data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
