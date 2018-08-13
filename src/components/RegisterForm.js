import React, { Component } from "react";
import ButtonCustom from "./ButtonCustom";
import { register } from "../reducers/ActionCreators";
import { connect } from "react-redux";
class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      usn: "",
      name: "",
      confirmPassword: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUsnChange = this.handleUsnChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    const name = e.target.value;
    this.setState({
      name
    });
  }

  handleUsnChange(e) {
    const usn = e.target.value.toUpperCase();
    this.setState({
      usn
    });
  }

  handleEmailChange(event) {
    const email = event.target.value;

    this.setState({
      email
    });
  }

  handlePasswordChange(event) {
    const password = event.target.value;
    this.setState({ password });
  }

  handleConfirmPasswordChange(e) {
    const confirmPassword = e.target.value;
    this.setState({ confirmPassword });
  }

  handleSubmit(e) {
    e.preventDefault();
    // alert(JSON.stringify(this.state));
    this.props.dispatch(register(this.state));
  }

  render() {
    return (
      <div className="container form-style" align="center">
        <form onSubmit={this.handleSubmit} className="font-google">
          <p className="h4 text-center mb-4">Sign up</p>
          <label htmlFor="defaultFormRegisterNameEx">Your name</label>
          <input
            type="text"
            id="defaultFormRegisterNameEx"
            placeholder="First Name and Last Name"
            value={this.state.name}
            onChange={this.handleNameChange}
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterUsnEx">Your USN</label>
          <input
            type="text"
            id="defaultFormRegisterUsnEx"
            placeholder="1XX16XX000"
            value={this.state.usn}
            onChange={this.handleUsnChange}
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterEmailEx">Your email</label>
          <input
            type="email"
            id="defaultFormRegisterEmailEx"
            placeholder="example@gmail.com"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterPasswordEx">Your password</label>
          <input
            type="password"
            id="defaultFormRegisterPasswordEx"
            placeholder="example"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterConfirmEx">
            Confirm your password
          </label>
          <input
            type="password"
            id="defaultFormRegisterConfirmEx"
            placeholder="type it again"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
            className="form-control input-box"
          />
          <div className="container align-left">
            <label className="checkbox">
              <input type="checkbox" />I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
          <div className="text-center mt-1">
            <ButtonCustom color="primary" type="submit">
              Register
            </ButtonCustom>
          </div>
          <div className="container">
            Already signed up? <a href="#">Sign In</a>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(RegisterForm);
