import React from "react";
import "./NewComment.css";

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  onSaveComment = () => {
    if (this.state.comment === "") {
      alert("Error: Input field can't be blank!");
    }
    this.props.onSaveComment(this.state.comment, this.props.id);
  };

  exitCommentBoxDialog = () => {
    this.props.exitCommentBox();
  };

  render() {
    return (
      <div className="newcomment-container">
        <header className="newcomment-header">
          <h2>New Comment</h2>
        </header>
        <div className="newcomment-input-wrapper">
          <input
            type="text"
            placeholder="Text"
            onChange={e => this.setState({ comment: e.target.value })}
          />
        </div>
        <div className="button-wrapper">
          <div className="button-sub-wrapper">
            <button onClick={this.onSaveComment}>Save</button>
          </div>
          <div className="button-sub-wrapper">
            <button onClick={this.exitCommentBoxDialog}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewComment;
