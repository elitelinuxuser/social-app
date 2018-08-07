import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

class Friends extends Component {
  render() {
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
            title="Username"
            description=" lorem iwednfhaposfhn poashfpo ahspof hapos fhpoa shf lorem iwednfhaposfhn poashfpo ahspof hapos fhpoa shflorem iwednfhaposfhn poashfpo ahspof hapos fhpoa"
          />
        </Card>
      </div>
    );
  }
}

export default Friends;
