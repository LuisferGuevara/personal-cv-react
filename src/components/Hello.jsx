import React from "react";
let illu = require("../assets/logo-2.png");

const Hello = ({ changeDisplay }) => {
  return (
    <div className="hello">
      <h1 className="gretting">
        <div className="m--container">
          <span>always be</span>
          <div class="message">
            <div class="word1">close.</div>
            <div class="word2">code.</div>
            <div class="word3">more.</div>
          </div>
        </div>
      </h1>
      <button onClick={changeDisplay} className="display--button btn-shine">
        <span>Curriculum Vitae</span>
      </button>

      <div className="hello--box">
        <img src={illu} alt="Me Illustrated" className="me--working" />
      </div>
    </div>
  );
};

export default Hello;
