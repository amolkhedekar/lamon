import React from "react";
import "./AuthStyle.css";
import AuthImage from "../../static/images/authimage.svg";

function SignIn() {
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
            <h1 className="auth__title">Login to continue</h1>
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
              <input type="submit" className="button__submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
