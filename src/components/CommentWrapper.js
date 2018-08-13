import React, { Component } from "react";
import Comments from "./Comments";
import { Form } from "semantic-ui-react";
import TextareaAutosize from "react-autosize-textarea";
import { connect } from "react-redux";

class CommentWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentValue: ""
    };
  }

  handleCommentValue = e => {
    this.setState({
      commentValue: e.target.value
    });
  };

  handleSubmit = () => {
    alert(this.state.commentValue);
  };

  enterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.handleSubmit();
      this.setState({
        commentValue: ""
      });
    }
  };

  render() {
    return (
      <div>
        {this.props.prop.post.comments &&
          this.props.prop.post.comments.map(comment => (
            <Comments key={comment._id} comment={comment} />
          ))}
        <Form
          className="animated fadeIn reply-form"
          onSubmit={this.handleSubmit}
        >
          <TextareaAutosize
            className="textarea-custom"
            rows={1}
            placeholder="Comment here!"
            value={this.state.commentValue}
            onChange={this.handleCommentValue}
            onKeyDown={this.enterPress}
          />
          <a type="submit" />
        </Form>
      </div>
    );
  }
}

export default connect()(CommentWrapper);
