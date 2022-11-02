import React from "react";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="nameLink">
        <a href="../index.html">Luisfer Guevara</a>
      </div>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Work</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
