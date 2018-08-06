import React from "react";
import { Comment, Form } from "semantic-ui-react";
import CommentCustom from "./CommentNested";
import TextareaAutosize from "react-autosize-textarea";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: 6,
      replyBoxShow: false
    };
    this.handleReplyClick = this.handleReplyClick.bind(this);
  }

  handleReplyClick() {
    this.setState({
      replyBoxShow: !this.state.replyBoxShow
    });
  }

  render() {
    if (this.state.levels === 0) {
      return <div />;
    } else {
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

            {this.state.replyBoxShow ? (
              <Form className="animated fadeIn reply-form">
                <TextareaAutosize
                  className="textarea-custom"
                  rows={3}
                  placeholder="Comment here!"
                />
                <a type="submit" />
              </Form>
            ) : (
              <div />
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
}

export default Comments;
