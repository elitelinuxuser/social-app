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
    const usn = e.target.value;
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
        <form onSubmit={this.handleSubmit}>
          <p className="h4 text-center mb-4">Sign up</p>
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            Your name
          </label>
          <input
            type="text"
            id="defaultFormRegisterNameEx"
            value={this.state.name}
            onChange={this.handleNameChange}
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterUsnEx" className="grey-text">
            Your USN
          </label>
          <input
            type="text"
            id="defaultFormRegisterUsnEx"
            value={this.state.usn}
            onChange={this.handleUsnChange}
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
            Your email
          </label>
          <input
            type="email"
            id="defaultFormRegisterEmailEx"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
            Your password
          </label>
          <input
            type="password"
            id="defaultFormRegisterPasswordEx"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
            Confirm your password
          </label>
          <input
            type="password"
            id="defaultFormRegisterConfirmEx"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
            className="form-control input-box"
          />
          <div className="text-center mt-4">
            <ButtonCustom color="primary" type="submit">
              Register
            </ButtonCustom>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(RegisterForm);
