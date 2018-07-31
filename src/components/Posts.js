import React from "react";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardImage,
//   CardTitle,
//   CardText
// } from "mdbreact";
import { Card, Icon, Avatar } from "antd";
const { Meta } = Card;
class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false
    };
  }
  render() {
    return (
      <div className="container col-lg-4 col-md-6 mb-r">
        <Card>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              this.state.like ? (
                <Icon type="heart" onClick={this.setState({ like: false })} />
              ) : (
                <Icon type="heart-o" />
              ),
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
