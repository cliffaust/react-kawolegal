import React from "react";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container-fluid homemain background">
        <div className="row homemain full-bg-img flex-center">
          <Navbar homeactive="active" />

          <div className="text-center homemaincontent">
            <h1>KAWOLEGAL</h1>
            <h3>
              A collaborative ecosystem for problem
              <br />
              solvers and support for startups.
            </h3>
            <Link to="/Register">
              <button type="button" className="btn btn-primary text-center">
                Register Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
