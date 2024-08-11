import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const NavLinks = (
    <>
      <nav
        data-aos="fade-up"
        data-aos-duration="1600"
        className="md:flex space-x-4 font-semibold items-center h-18 sticky top-0"
      >
        <NavLink data-aos="fade-up" data-aos-duration="1600" to="/">
          Home
        </NavLink>
        <NavLink data-aos="fade-up" data-aos-duration="1800" to="/projects">
          Projects
        </NavLink>
        <NavLink data-aos="fade-up" data-aos-duration="2000" to="/team">
          Team
        </NavLink>
        <NavLink data-aos="fade-up" data-aos-duration="2200" to="/contacts">
          Contacts
        </NavLink>
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
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-64 bg-orange-100 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <Link
            to="/"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-2xl md:text-4xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600"
          >
            AgencyWave
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-vertical px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/signUp">
            <button
              data-aos="fade-up"
              data-aos-duration="2400"
              className="bg-gradient-to-r from-orange-400 to-orange-600 py-2 px-4 text-white font-semibold rounded-md"
            >
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
