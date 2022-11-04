import React from "react";

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
        <img src="/assets/logo-2.png" alt="Me Illustrated" className="me--working" onClick={changeDisplay} />
      </div>
    </div>
  );
};

export default Hello;
