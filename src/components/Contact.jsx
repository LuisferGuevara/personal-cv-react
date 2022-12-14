import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div className="contact--box">
        <p>I would like to know about you, so if you want to; please send me an email to:</p>
        <a href="mailto:luisfer.guevaraa@gmail.com?subject=look at this website&body=Hi,I found your CV amazing and I want to" target="_blank" rel="noreferrer">
          luisfer.guevaraa@gmail.com
        </a>

        <p>
          <strong>LinkedIn: </strong>
        </p>
        <a
          href="https://www.linkedin.com/in/luisferguevarapro/"
          target="_blank"
          rel="noreferrer"
        >
          www.linkedin.com/in/luisferguevarapro
        </a>

        <div className="telephone">
          <span>or: (+34) 625 851 285</span>
          <img src="/assets/logo.jpg" alt="Me Illustrated" className="contact--img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
