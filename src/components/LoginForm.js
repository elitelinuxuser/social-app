import React from "react";
import ButtonCustom from "./ButtonCustom";

class LoginForm extends React.Component {
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
    alert("Email: " + this.state.email + "Password: " + this.state.password);
  }

  handlePasswordChange(event) {
    const password = event.target.value;
    this.setState({ password });
  }

  render() {
    return (
      <div className="container form-style">
        <form onSubmit={this.handleSubmit}>
          <p className="h4 text-center mb-4">Sign in</p>
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Your email
          </label>
          <input
            type="email"
            id="defaultFormLoginEmailEx"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="form-control input-box"
            autoFocus
          />
          <br />
          <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
            Your password
          </label>
          <input
            type="password"
            id="defaultFormLoginPasswordEx"
            password={this.state.password}
            onChange={this.handlePasswordChange}
            className="form-control input-box"
          />
          <div className="text-center mt-4">
            <ButtonCustom color="primary" type="submit">
              Login
            </ButtonCustom>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
