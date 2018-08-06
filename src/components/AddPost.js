import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";

class AddPost extends Component {
  render() {
    return (
      <div>
        <TextareaAutosize
          className="textarea-custom"
          rows={3}
          placeholder="minimum height is 3 rows"
        />
      </div>
    );
  }
}

export default AddPost;
