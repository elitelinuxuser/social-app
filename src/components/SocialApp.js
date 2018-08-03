import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { connect } from "react-redux";
import { fetchPosts } from "../reducers/ActionCreators";
import Posts from "./Posts";
import LandingPage from "./LandingPage";
import Comments from "./Comments";

const RenderPost = props => {
  const posts = props.posts.map(post => <Posts post={post} />);
  return <div>{posts}</div>;
};
class SocialApp extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchPosts());
  }
  render() {
    return (
      <div className="main-div">
        {!this.props.user.name && <LandingPage />}
        {this.props.user.name && <Navbar />}
        {this.props.user.name &&
          this.props.posts.map(post => <Posts post={post} />)}
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
