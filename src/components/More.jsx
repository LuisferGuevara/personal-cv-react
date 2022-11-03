import React from "react";
import Habilities from "./Habilities";
import Languages from "./Lenguage";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div>
      <Habilities skills= {habilities}/>
      <Languages info= {languages}/>
    </div>
  );
};

export default More;
