import React from "react";

const Navbar = ({ setCurrentRoute }) => {
  return (
    <div className="navigation">
      <div className="nameLink">
        <a href="../index.html" className="link">
          Luisfer Guevara
        </a>
      </div>
      <ul>
        <li>
          <p className="link" onClick={() => setCurrentRoute("about")}>
            About
          </p>
        </li>
        <li>
          <p className="link" onClick={() => setCurrentRoute("works")}>
            Works
          </p>
        </li>
        <li>
          <p className="link" onClick={() => setCurrentRoute("contact")}>
            Contact
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
