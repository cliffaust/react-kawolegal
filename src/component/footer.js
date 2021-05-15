import React from "react";

function Footer(props) {
  return (
    <div className="container-fluid" className="homefooter">
      <div className="row">
        <div className="col-md-6  ">
          <p className="copyright">
            &copy; 2017 KAWOLegal. All Rights Reserved
          </p>
        </div>
        <div className="col-md-6 socialmedia ">
          <a href="#" className="fa fa-facebook icon"></a>
          <a href="#" className="fa fa-twitter icon"></a>
          <a href="#" className="fa fa-linkedin icon"></a>
          <a href="#" className="fa fa-instagram icon"></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
