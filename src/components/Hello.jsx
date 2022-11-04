import React from "react";
let illu = require("../assets/logo-2.PNG");

const Hello = ({ changeDisplay }) => {
  return (
    <div className="hello">
      <h1>
        <div className="m--container">
          <span>always be</span>
          <div className="message">
            <div className="word1">close.</div>
            <div className="word2">code.</div>
            <div className="word3">more.</div>
          </div>
        </div>
      </h1>
      <div className="hello--box">
        <img src={illu} alt="Me Illustrated" className="me--working" onClick={changeDisplay} />
      </div>
    </div>
  );
};

export default Hello;
