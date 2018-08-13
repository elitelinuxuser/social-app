import React from "react";
import { Comment, Form } from "semantic-ui-react";
import TextareaAutosize from "react-autosize-textarea";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replyBoxShow: false
    };
    this.handleReplyClick = this.handleReplyClick.bind(this);
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

  handleReplyClick() {
    this.setState({
      replyBoxShow: !this.state.replyBoxShow
    });
  }

  render() {
    return (
      <Comment.Group className="animated fadeIn threaded">
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          <Comment.Content className="content-bottom">
            <Comment.Author as="a">
              {this.props.comment.author.name}
            </Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>{this.props.comment.body}</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Like</Comment.Action>
              <Comment.Action onClick={this.handleReplyClick}>
                Reply
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>

          {this.state.replyBoxShow && (
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
          )}

          {this.props.comment.replies &&
            this.props.comment.replies.map(reply => (
              <Comments key={reply._id} comment={reply} />
            ))}
        </Comment>
      </Comment.Group>
    );
  }
}

export default Comments;
