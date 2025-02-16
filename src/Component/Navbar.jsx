import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-black shadow-md ">
      <div className="flex-1">
        <a className="btn btn-ghost text-md">My Portfolio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
