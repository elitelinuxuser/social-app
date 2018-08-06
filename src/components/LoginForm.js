import React, { Component } from "react";
import ButtonCustom from "./ButtonCustom";
import { login } from "../reducers/ActionCreators";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    const email = event.target.value;

    this.setState({
      email
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // alert("Email: " + this.state.email + "Password: " + this.state.password);
    this.props.dispatch(login(this.state.email, this.state.password));
    console.log(JSON.stringify(this.props.user));

    setTimeout(() => {
      if (this.props.user.name) {
        console.log(JSON.stringify(this.props.user));
        return <Redirect to="/post" />;
      }
    }, 3000);
  }
  handlePasswordChange(event) {
    const password = event.target.value;
    this.setState({ password });
  }

  render() {
    return (
      <div className="container form-style">
        <form onSubmit={this.handleSubmit} className="font-google">
          <p className="h4 text-center mb-4">Sign in</p>
          <label htmlFor="defaultFormLoginEmailEx">Your email</label>
          <input
            type="email"
            id="defaultFormLoginEmailEx"
            placeholder="example@gmail.com"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="form-control input-box"
            autoFocus
          />
          <br />
          <label htmlFor="defaultFormLoginPasswordEx">Your password</label>
          <input
            type="password"
            id="defaultFormLoginPasswordEx"
            placeholder="example"
            password={this.state.password}
            onChange={this.handlePasswordChange}
            className="form-control input-box"
          />
          <div className="align-left">
            <a href="#">Forgot password?</a>
          </div>
          <div className="text-center mt-1" style={{ borderTop: "0" }}>
            <ButtonCustom color="primary" type="submit">
              Login
            </ButtonCustom>
            <div className="container">
              Not yet Registered? <a href="#">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(LoginForm);
