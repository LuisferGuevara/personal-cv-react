import React from "react";

const Works = ({ info }) => {
  console.log(info);
  return (
    <div>
      <h2>WORKS</h2>
      {info.map((element) => {
        return (
          <div key={JSON.stringify(element)} className="works--box">
            <h3>{element.name}.</h3>
            <p>{element.description}</p>
            <a href={element.url} target="_blanck">
              {element.url}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
