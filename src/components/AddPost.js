import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";
import { Form } from "semantic-ui-react";
import Button from "./ButtonCustom";
import { newPost } from "../reducers/ActionCreators";
import { connect } from "react-redux";
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
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit() {
    this.props.dispatch(newPost(this.state.desc, this.props.user._id));
  }

  render() {
    return (
      <div align="center" className="container addpost-wrapper">
        <Form
          onSubmit={this.handleSubmit}
          className="animated slideInDown reply-form addpost-form-wrapper"
        >
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
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(AddPost);
