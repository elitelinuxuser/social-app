import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default class SocialApp extends React.Component {
  render() {
    return (
      <div className="container">
        <LoginForm />
        <RegisterForm />
      </div>
    );
  }
}
