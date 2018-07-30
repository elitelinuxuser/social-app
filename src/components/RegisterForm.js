import React from "react";
import ButtonCustom from "./ButtonCustom";

const RegisterForm = () => {
  return (
    <div className="container">
      <div className="container form-style">
        <form>
          <p className="h4 text-center mb-4">Sign up</p>
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            Your name
          </label>
          <input
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterUsnEx" className="grey-text">
            Your USN
          </label>
          <input
            type="text"
            id="defaultFormRegisterUsnEx"
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
            Your email
          </label>
          <input
            type="email"
            id="defaultFormRegisterEmailEx"
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
            Your password
          </label>
          <input
            type="password"
            id="defaultFormRegisterPasswordEx"
            className="form-control input-box"
          />
          <br />
          <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
            Confirm your password
          </label>
          <input
            type="password"
            id="defaultFormRegisterConfirmEx"
            className="form-control input-box"
          />
          <div className="text-center mt-4">
            <ButtonCustom color="primary" type="submit">
              Register
            </ButtonCustom>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
