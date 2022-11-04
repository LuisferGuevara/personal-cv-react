import React from "react";
let illu = require("../assets/logo-2.PNG");

const Hello = ({ changeDisplay }) => {
  return (
    <div className="hello">
      <h1>
        <div className="m--container">
          <span>always be</span>
          <div class="message">
            <div class="word1">close.</div>
            <div class="word2">code.</div>
            <div class="word3">more.</div>
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
