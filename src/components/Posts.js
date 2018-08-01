import React from "react";
import { Card, Icon, Avatar } from "antd";
const { Meta } = Card;
class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      iconType: "heart-o",
      colorChange: "rgba(0, 0, 0, 0.45)"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      like: !this.state.like,
      iconType: this.state.like ? "heart-o" : "heart",
      colorChange: this.state.like ? "rgba(0, 0, 0, 0.45)" : "#3F51B5"
    });
  }

  render() {
    const userName = <div className="username">Dummy Text</div>;
    return (
      <div className="container col-lg-4 col-md-6 mb-r">
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
                onClick={this.handleClick}
              />,
              <Icon type="message" />,
              <Icon type="share-alt" />,
              <Icon type="ellipsis" />
            ]}
          />
        </Card>
      </div>
    );
  }
}
export default Posts;
