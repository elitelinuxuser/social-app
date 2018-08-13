import React from "react";
import { Card, Icon, Avatar } from "antd";
import Comments from "./Comments";
import { connect } from "react-redux";
import { heartPost } from "../reducers/ActionCreators";
const { Meta } = Card;
class Posts extends React.Component {
  constructor(props) {
    super(props);
    const likeValue = this.props.post.hearts.indexOf(this.props.user._id)
      ? true
      : false;
    this.state = {
      like: likeValue,
      iconType: likeValue ? "heart-o" : "heart",
      colorChange: "rgba(0, 0, 0, 0.45)",
      commentShow: likeValue ? "rgba(0, 0, 0, 0.45)" : "#3F51B5"
    };
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleCommentClick = this.handleCommentClick.bind(this);
  }
  handleLikeClick() {
    this.props.dispatch(heartPost(this.props.post._id));
    const likeValue = this.props.post.hearts.indexOf(this.props.user._id)
      ? true
      : false;
    this.setState({
      like: likeValue,
      iconType: likeValue ? "heart-o" : "heart",
      colorChange: "rgba(0, 0, 0, 0.45)",
      commentShow: likeValue ? "rgba(0, 0, 0, 0.45)" : "#3F51B5"
    });
  }

  handleCommentClick() {
    this.setState({
      commentShow: !this.state.commentShow
    });
  }
  render() {
    return (
      <div
        className="container col-lg-6 col-md-4 mb-r animated slideInDown"
        style={{ maxWidth: "650px" }}
      >
        <Card className="z-depth-2">
          <Meta
            title={this.props.post.author.name}
            description={this.props.post.body}
          />

          <Card
            cover={<img alt="example" />}
            actions={[
              <Icon
                className="like-icon"
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
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Posts);
