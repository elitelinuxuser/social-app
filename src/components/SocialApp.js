import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { connect } from "react-redux";
import Posts from "./Posts";
import TabsPage from "./TabsPage";
import LandingPage from "./LandingPage";
import { fetchPosts } from "../reducers/ActionCreators";
class SocialApp extends React.Component {
  constructor(props) {
    super(props);
    console.log("social app");
  }
  componentDidUpdate() {
    console.log(JSON.stringify(this.props.user));
    setTimeout(() => {
      // if (this.props.user && this.props.posts.length < 1) {
      // this.props.dispatch(fetchPosts());
    }, 3000);
  }

  render() {
    if (this.props.user && this.props.posts.length < 1) {
      this.props.dispatch(fetchPosts());
    }
    return (
      <div className="main-div container-fluid">
        {!this.props.user.name && <LandingPage />}
        {this.props.user.name && <Navbar />}
        {this.props.user.name &&
          this.props.posts.map(post => (
            <Posts key={post._id} post={post} />
          ))}{" "}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts,
    user: state.user
  };
};

export default connect(mapStateToProps)(SocialApp);
