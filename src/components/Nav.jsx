import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const NavLinks = (
    <>
      <nav className="md:flex space-x-4 font-semibold items-center text-lg h-18 sticky top-0">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar md:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl md:text-4xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700"
          >
            AgencyWave
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-vertical px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <button className="bg-gradient-to-r from-blue-600 to-violet-700 py-2 px-4 text-white font-semibold rounded-md">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
