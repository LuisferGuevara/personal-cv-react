import React from "react";

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <h2>Experience</h2>

      {experience.map((element) => {
        return (
          <div key={JSON.stringify(element)} className="experience--box">
            <h4>
              <em>
                {element.name}; <span>{element.where}; </span>
                <span>{element.date}</span>
              </em>
            </h4>
            <p>{element.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
