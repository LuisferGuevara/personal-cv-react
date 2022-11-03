import React from 'react'

const Habilities = ({skills}) => {
  return (
    <div>
    <h2>Skills</h2>
    <div className="skills--box">
    {skills.map((element) => {
      return (
        <div key={JSON.stringify(element)} >
          <p>{element}</p>
        </div>
      );
    })}
    </div>
  </div>
  )
}

export default Habilities