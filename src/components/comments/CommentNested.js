import React from "react";
import { Comment, Form } from "semantic-ui-react";
import Button from "../ButtonCustom";
import CommentReplies from "./CommentReplies";
import TextareaAutosize from "react-autosize-textarea";

class CommentCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: this.props.levels,
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
    return (
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
          <Comment.Content className="content-bottom">
            <Comment.Author as="a">Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
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
                rows={1}
                placeholder="minimum height is 1 row"
              />
              <a type="submit" />
            </Form>
          ) : (
            <div />
          )}

          {this.state.levels !== 1 ? (
            <CommentReplies levels={this.state.levels - 1} />
          ) : (
            <div />
          )}
        </Comment>
      </Comment.Group>
    );
  }
}

export default CommentCustom;
