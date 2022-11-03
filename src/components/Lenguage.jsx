import React from "react";

const Lenguage = ({ info }) => {
  return (
    <div>
      <h2>Languages</h2>
      {info.map((element) => {
        return (
          <div key={JSON.stringify(element)} className="main--box">
            <p>{element.language}: <span>{element.level}</span>.</p>
          </div>
        );
      })}
    </div>
  );
};

export default Lenguage;
