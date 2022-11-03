import React from "react";

const Navbar = ({setCurrentRoute}) => {

  return (
    <div className="navigation">
      <div className="nameLink">
        <a href="../index.html">Luisfer Guevara</a>
      </div>
      <ul>
        <li>
          <p onClick={() => setCurrentRoute("about")}>About</p>
        </li>
        <li>
          <p onClick={() => setCurrentRoute("works")}>Work</p>
        </li>
        <li>
          <p onClick={() => setCurrentRoute("contact")}>Contact</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
