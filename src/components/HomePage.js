import React from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { fetchPosts } from "../reducers/ActionCreators";
import AddPost from "./AddPost";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.props.dispatch(fetchPosts(this.props.postCount));
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.onScroll, false);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.onScroll, false);
  // }

  // onScroll = () => {
  //   if (
  //     window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
  //     this.props.posts.length === this.props.postCount * 3
  //   ) {
  //     console.log(this.props.posts.legnth === this.props.postCount);
  //     this.props.dispatch(fetchPosts(this.props.postCount));
  //   }
  // };
  // componentDidUpdate() {
  //   console.log("post count" + this.props.postCount * 3);
  //   console.log("post length" + this.props.posts.length);
  // }

  handleScroll() {
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
    const Loading = () => {
      return (
        <div className="col-12">
          <i
            class="fa fa-circle-o-notch fa-spin"
            style={{ fontSize: "24px" }}
          />
        </div>
      );
    };
    return (
      <div className="main-div">
        {this.props.user.name && <AddPost />}
        {this.props.loading && <Loading align="center" />}
        {this.props.user.name &&
          !this.props.loading &&
          this.props.posts.map(post => (
            <Posts key={post._id} post={post} />
          ))}{" "}
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

export default connect(mapStateToProps)(HomePage);
