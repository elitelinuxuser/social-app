import React from "react";
import { Comment, Form } from "semantic-ui-react";
import Button from "../ButtonCustom";
import CommentCustom from "./CommentNested";
import TextareaAutosize from "react-autosize-textarea";

class CommentExampleComment extends React.Component {
  constructor() {
    super();
    this.state = {
      levels: 6
    };
  }
  render() {
    if (this.state.levels === 0) {
      return <div />;
    } else {
      return (
        <Comment.Group className="animated fadeIn" threaded>
          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
            <Comment.Content>
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
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            {this.state.levels !== 1 ? (
              <CommentCustom levels={this.state.levels - 1} />
            ) : (
              <div />
            )}
          </Comment>

          <Form>
            <TextareaAutosize rows={3} placeholder="minimun height is 3 rows" />
            <Button color="primary">Add Comment</Button>
          </Form>
        </Comment.Group>
      );
    }
  }
}

export default CommentExampleComment;
