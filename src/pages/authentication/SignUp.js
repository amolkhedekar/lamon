import React from "react";
import "./style.css";

function SignUp() {
  return (
    <div>
      <div class="row">
        <div class="container">
          <div class="col-3 input-effect">
            <input class="effect-20" type="text" placeholder="" />
            <label>First</label>
            <span class="focus-border">
              <i></i>
            </span>
          </div>
          <div class="col-3 input-effect">
            <input class="effect-24" type="text" placeholder="" />
            <label>First Name</label>
            <span class="focus-bg"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
