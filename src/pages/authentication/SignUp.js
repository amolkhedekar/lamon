import React from "react";
import "./AuthStyle.css";
import AuthImage from "../../static/images/authimage.svg";

function SignUp() {
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__row">
        <img
            className="auth__image"
            src={AuthImage}
            alt="personimage"
          />
          <div className="auth__formContainer">
            <h1 className="auth__title">Signup here</h1>
            <form method="POST" action="">
              <div className="div__textInput">
                <input
                  type="email"
                  placeholder="Email"
                  className="text__input"
                  name="text__email"
                />
              </div>
              <div className="div__textInput">
                <input
                  type="password"
                  placeholder="Password"
                  className="text__input"
                  name="text__password"
                />
              </div>
              <div className="div__textInput">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="text__input"
                  name="text__confirmPassword"
                />
              </div>
              <input type="submit" className="button__submit" value="Signup" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
