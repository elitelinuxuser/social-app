import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";
import { Form } from "semantic-ui-react";
import Button from "./ButtonCustom";

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      rows: 2,
      desc: ""
    };
    this.handleTextAreaClick = this.handleTextAreaClick.bind(this);
    this.handleTextAreaOut = this.handleTextAreaOut.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
  }

  handleTextAreaOut() {
    this.setState({
      rows: 2
    });
  }

  handleTextAreaClick() {
    this.setState({
      rows: 4
    });
  }

  handleDescChange(e) {
    this.setState({
      desc: e.target.value
    });
  }

  render() {
    return (
      <div align="center" className="container addpost-wrapper">
        <Form className="animated slideInDown reply-form addpost-form-wrapper">
          <TextareaAutosize
            onClick={this.handleTextAreaClick}
            onMouseLeave={this.handleTextAreaOut}
            className="addpost-form"
            value={this.state.desc}
            onChange={this.handleDescChange}
            rows={this.state.rows}
            placeholder="What's on your mind?"
          />
          <Button color="primary" type="submit" className="addpost-submit">
            Add Post
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddPost;
