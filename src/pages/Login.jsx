import React from "react";
import Button from "../component/button";
import Footer from "../component/footer";
import Inputfield from "../component/inputfield";
import Navbar from "../component/navbar";

export default function Login() {
  return (
    <div>
      <Navbar loginactive="active" class="row main" />
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-md-offset-2 ">
            <p className="loginfirsttext ">
              Already a Member? Login to add your Startup.
            </p>
            <Inputfield label="Email" type="email" placeholder="Email" />
            <Inputfield
              label="Password"
              type="password"
              placeholder="Password"
            />
            <Button text="Log in" />
          </div>
        </div>
      </div>
      <Footer footer_class="loginfooter" />
    </div>
  );
}
