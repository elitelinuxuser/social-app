import React from "react";
import { Comment, Form } from "semantic-ui-react";
import Button from "../ButtonCustom";
import CommentCustom from "./CommentNested";
import TextareaAutosize from "react-autosize-textarea";

class CommentExampleComment extends React.Component {
  constructor() {
    super();
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
              <Comment.Author as="a">Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
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
                  placeholder="minimum height is 3 rows"
                />
                <a type="submit" />
              </Form>
            ) : (
              <div />
            )}

            {this.state.levels !== 1 ? (
              <CommentCustom levels={this.state.levels - 1} />
            ) : (
              <div />
            )}
          </Comment>
        </Comment.Group>
      );
    }
  }
}

export default CommentExampleComment;
