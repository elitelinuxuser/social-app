import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { fetchPosts } from "../reducers/ActionCreators";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: "4em",
      height: window.innerHeight
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.props.dispatch(fetchPosts(this.props.postCount));
  }

  handleScroll(e) {
    this.setState({
      fontSize: "4rem"
    });
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      this.setState({
        fontSize: "2.5rem"
      });
    }
    console.log("scrolled");
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (
      windowBottom >= docHeight &&
      this.props.posts.length === this.props.postCount * 3
    ) {
      console.log(fetchPosts(this.props.postCount));
      this.props.dispatch(fetchPosts(this.props.postCount));
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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

        {this.props.user.name &&
          this.props.posts.map(
            post =>
              this.props.user.name === post.author.name && (
                <Posts key={post._id + "wql"} post={post} />
              )
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    postCount: state.posts.postCount,
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
