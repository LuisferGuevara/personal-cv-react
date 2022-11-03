import React from "react";

const Navbar = ({changeRoute}) => {

  return (
    <div className="navigation">
      <div className="nameLink">
        <a href="../index.html">Luisfer Guevara</a>
      </div>
      <ul>
        <li>
          <a href="/" onClick={(e) => changeRoute(e,"about")}>About</a>
        </li>
        <li>
          <a href="/" onClick={(e) => changeRoute(e,"works")}>Work</a>
        </li>
        <li>
          <a href="/" onClick={(e) => changeRoute(e,"contact")}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
