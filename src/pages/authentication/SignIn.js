import React from "react";
import "./AuthStyle.css";

function SignIn() {
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__row">
          <div className="auth__formContainer">
            <form method="POST" action="">
              <input
                type="text"
                placeholder="Email"
                className="text__input"
                name="text__email"
              />
              <input
                type="password"
                placeholder="Password"
                className="text__input"
                name="text__password"
              />
              <input type="submit" className="button__submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
