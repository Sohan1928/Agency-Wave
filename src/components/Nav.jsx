import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.className = storedTheme;
  }, []);

  const NavLinks = (
    <nav className="flex flex-col md:flex-row md:space-x-4 font-medium text-black text-sm items-center h-18 space-y-2 md:space-y-0">
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
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar md:px-16 fixed top-0 left-0 w-full z-50 bg-[#776858]">
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
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-36 bg-orange-100 p-8 shadow-lg flex flex-col space-y-2"
            >
              {NavLinks}

              <div className="block justify-center md:hidden">
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
        <div className="navbar-end hidden md:pr-2 md:flex">
          {NavLinks}
          <Link to="/signUp">
            <button
              data-aos="fade-up"
              data-aos-duration="2400"
              className="bg-gradient-to-r from-orange-400 to-orange-600 py-2 px-4 text-white font-semibold rounded-md ml-4"
            >
              SignUp
            </button>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="bg-gray-300 dark:bg-gray-700 p-2 ml-16 md:ml-0 rounded-md"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m8.364-10.364l-.707-.707M4.343 19.657l-.707-.707M21 12h1M3 12H2m16.364-7.364l-.707-.707M4.343 4.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3C8.13401 3 5 6.13401 5 10c0 3.866 3.13401 7 7 7 3.866 0 7-3.134 7-7 0-3.866-3.134-7-7-7z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
