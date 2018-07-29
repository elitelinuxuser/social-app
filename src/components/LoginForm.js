import React from "react";
import ButtonCustom from "./ButtonCustom";

const LoginForm = () => {
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
          <ButtonCustom color="primary" type="submit">
            Login
          </ButtonCustom>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
