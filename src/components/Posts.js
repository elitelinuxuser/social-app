import React from "react";
import { Card, Icon, Avatar } from "antd";
import Comments from "./Comments";
import { connect } from "react-redux";
import { fetchComments } from "../reducers/ActionCreators";
const { Meta } = Card;
class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      iconType: "heart-o",
      colorChange: "rgba(0, 0, 0, 0.45)",
      commentShow: false
    };
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleCommentClick = this.handleCommentClick.bind(this);
  }

  handleLikeClick() {
    this.setState({
      like: !this.state.like,
      iconType: this.state.like ? "heart-o" : "heart",
      colorChange: this.state.like ? "rgba(0, 0, 0, 0.45)" : "#3F51B5"
    });
  }

  handleCommentClick() {
    this.setState({
      commentShow: !this.state.commentShow
    });
  }
  render() {
    console.log("post render" + JSON.stringify(this.props.posts));
    return (
      <div
        className="container col-lg-6 col-md-4 mb-r"
        style={{ maxWidth: "650px" }}
      >
        <Card>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={this.props.post.title}
            description={this.props.post.body}
          />

          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon
                style={{ color: this.state.colorChange }}
                type={this.state.iconType}
                onClick={this.handleLikeClick}
              />,
              <Icon type="message" onClick={this.handleCommentClick} />,
              <Icon type="share-alt" />,
              <Icon type="ellipsis" />
            ]}
          />
          {this.state.commentShow &&
            this.props.post.comments &&
            this.props.post.comments.map(comment => (
              <Comments key={comment._id} comment={comment} />
            ))}
        </Card>
      </div>
    );
  }
}
export default connect()(Posts);
