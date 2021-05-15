import React from "react";
import Button from "../component/button";
import Footer from "../component/footer";
import Inputfield from "../component/inputfield";
import Navbar from "../component/navbar";

function Register() {
  return (
    <div>
      <Navbar registeractive="active" class="row main" />

      <div class="container">
        <div class="row">
          <div class="col-md-offset-2 col-md-8 col-md-offset-2 ">
            <p class="registerfirsttext ">
              Join KawoLegal. Sign up to get your Startup listed now!
            </p>
            <Inputfield type="text" label="Full Name" placeholder="full name" />
            <Inputfield
              type="email"
              label="Email Address"
              placeholder="email address"
            />
            <Inputfield
              type="password"
              label="Password"
              placeholder="password"
            />
            <Inputfield
              type="password"
              label="Confirm Password "
              placeholder="confirm password"
            />
            <Button text="Sign Up" />
          </div>
        </div>
      </div>
      <Footer footer_class="registerfooter" />
    </div>
  );
}

export default Register;
