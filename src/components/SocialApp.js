import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { connect } from "react-redux";
import { fetchPosts } from "../reducers/ActionCreators";
import TabsPage from "./TabsPage";

const Post = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <h2>{props.post.body}</h2>
      <h4>
        Created by <i>{props.post.author.name}</i>
      </h4>
    </div>
  );
};

class SocialApp extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchPosts());
  }
  render() {
    return (
      <div>
        <Navbar />
        <div>{this.props.posts.map(post => <Post post={post} />)}</div>
        <TabsPage />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(SocialApp);
