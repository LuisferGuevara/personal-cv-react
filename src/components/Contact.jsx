import React from "react";
let logo = require("../assets/logo.JPG");

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div className="contact--box">
        <p>I would like to know about you, so if you want to; please send me an email to:</p>
        {/* <a href="" m></a> */}
        <a href="mailto:luisfer.guevaraa@gmail.com" target="_blank" rel="noreferrer">
          luisfer.guevaraa@gmail.com
        </a>
        <div className="telephone">
          <span>or: (+34) 625 851 285</span>
          <img src={logo} alt="Me Illustrated" className="contact--img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
