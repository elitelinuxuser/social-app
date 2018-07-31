import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Posts from "./Posts";

export default class SocialApp extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Posts />
        <LoginForm />
        <RegisterForm />
        <Footer />
      </div>
    );
  }
}
