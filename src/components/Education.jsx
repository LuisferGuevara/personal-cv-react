import React from "react";

const Education = ({ education }) => {
//   console.log(education);
  return (
    <div className="education">
      <h2>Education</h2>

      {education.map((element) => {
        return (
          <div key={JSON.stringify(element)} className="main--box">
            <p >{element.name}, <span>{element.date},</span><span> {element.where}</span>.</p>
          
          </div>
        );
      })}
    </div>
  );
};

export default Education;
