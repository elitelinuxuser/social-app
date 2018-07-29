import React from "react";
import { Button } from "mdbreact";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovered: false
    };
  }
  mouseEnter = () => {
    this.setState({ isHovered: true });
  };
  mouseLeave = () => {
    this.setState({ isHovered: false });
  };
  render() {
    return (
      <div className="container form-style">
        <form>
          <p className="h4 text-center mb-4">Sign in</p>
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Your email
          </label>
          <input
            type="email"
            id="defaultFormLoginEmailEx"
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
            Your password
          </label>
          <input
            type="password"
            id="defaultFormLoginPasswordEx"
            className="form-control input-box"
          />
          <div className="text-center mt-4">
            <Button
              className="login-button"
              color="primary"
              type="submit"
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              outline={this.state.isHovered}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
