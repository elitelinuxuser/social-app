import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: "5em"
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({
      fontSize: "2rem"
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <div>
        <div className="profile-cover container-fluid text-center">
          <img
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            className=""
            alt=""
          />
        </div>
        <div className="container">
          <h2
            align="center"
            className="profile-username"
            style={{ fontSize: this.state.fontSize }}
          >
            Lucifer
          </h2>
        </div>
      </div>
    );
  }
}

export default Profile;
