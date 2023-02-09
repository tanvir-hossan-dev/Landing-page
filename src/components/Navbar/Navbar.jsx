import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <a className="btn btn-ghost  text-xl font-bold uppercase">Trabook</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Destination</a>
          </li>
          <li>
            <a>Tour</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-active btn-ghost mr-4">Login</button>
        <button className="btn btn-secondary">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
